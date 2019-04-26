const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require("axios");

// @route GET api/youtube/videos/test
// @desc test youtube videos route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "youtube videos works" }));

// @route GET api/youtube/videos
// @desc get youtube list
// @access Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const YOUTUBE_KEY = "AIzaSyCd6lBCGyrYYfG5xSwD2WWi7zdfVQDiS_0";
    // const YOUTUBE_KEY = "AIzaSyCG7SyjF4lB1Ekpoq-AGZ4uU0nqngR-xgo";
    const YOUTUBE_KEY = "AIzaSyCBTQHSbr4OUBbfIipfxtk2JojsGvGMKfE";

    const params = {
      part: "snippet",
      amount: req.body.amount,
      key: YOUTUBE_KEY,
      q: req.body.term
    };

    const videos = [];

    axios
      .get("https://www.googleapis.com/youtube/v3/search", { params: params })
      .then(response => {
        response.data.items.map(item => {
          videos.push(item);
        });
        res.json(videos);
      })
      .catch(err => res.status(404).json({ errors: err }));
  }
);

// @route GET api/youtube/videos/video_link cors restrictions
// @desc get youtube video by link
// @access Public
router.post(
  "/video_link",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log("api cccc", req.body.link);
    axios
      .post(req.body.link)
      .then(response => res.json(response.data))
      .catch(err =>
        res
          .status(404)
          .json({ errors: "youtube element have not  being found" })
      );
  }
);

module.exports = router;
