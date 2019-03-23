const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const youtubeVideos = require("./routes/api/youtube/videos");
const settings = require("./routes/api/settings");
const videos = require("./routes/api/videos");

const app = express();

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

// Set up a whitelist of domains that can render us in an iframe

var XFRAME_WHITELIST = ["https://www.youtube.com"];

// serv assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    // If the domain matches, allow iframes from that domain
    if (XFRAME_WHITELIST.indexOf(req.query.domain) !== -1) {
      res.header("X-FRAME-OPTIONS", "ALLOW-FROM " + req.query.domain);
    }
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
