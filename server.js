const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const users = require("./routes/api/users");
const youtubeVideos = require("./routes/api/youtube/videos");
const settings = require("./routes/api/settings");
const videos = require("./routes/api/videos");

const app = express();

// Set up a whitelist and check against it:

// var whitelist = [
//   "https://youtube.com",
//   "https://cors-anywhere.herokuapp.com",
//   "http://localhost"
// ];
// var corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };
app.options("*", cors());
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config

require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

// Use Routes
app.use("/api/users", users);
app.use("/api/youtube/videos", youtubeVideos);
app.use("/api/settings", settings);
app.use("/api/videos", videos);

// serv assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// app.get("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("X-FRAME-OPTIONS", "ALLOW-FROM *");
// });

app.use(function(req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://youtube.com"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
