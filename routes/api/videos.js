const express = require("express");
const router = express.Router();
const passport = require("passport");

const Video = require("../../models/Video");
const VideoCategory = require("../../models/VideoCategory");

// @route api/videos/favourite
// @desc post favourite video
// @access Public
router.post(
  "/favourite",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.body);
    const favListItem = {
      userId: req.body.userId,
      catId: req.body.catId,
      videoKey: req.body.videoKey,
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail
    };

    // Video.findOneAndUpdate(
    //   { userId: req.body.userId },
    //   { $set: favListItem }
    // ).then(data => console.log(data));

    // Video.findOne({ userId: req.body.userId })
    //   .then(video => {
    //     video.favList.push(favListItem);
    //     video.save().then(data => res.json(data));
    //   })
    //   .catch(err => console.log(err));
    // console.log(favListItem);
    const newVideo = new Video(favListItem);
    newVideo
      .save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
);

// @route api/videos
// @desc get videos list
// @access Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Video.findOne({ userId: "5c14e04189ac3d1014ecc169" })
    //   .then(data => res.json(data))
    //   .catch(err => res.status(404).json({ novideosfound: "novideosfound" }));
    Video.find()
      .then(data => res.json(data))
      .catch(err => res.status(404).json({ novideosfound: "novideosfound" }));
  }
);

// @route GET api/videos/current/:id
// @desc get video by id
// @access Public
router.get("/current/:id", (req, res) => {
  // console.log(req.params.id);
  // console.log("current video");
  Video.findById(req.params.id)
    .then(video => res.json(video))
    .catch(err =>
      res.status(404).json({ novideofound: `No video found with id` })
    );
});

// @route api/videos/delete:id
// @desc delete video from videos list
// @access Public
router.post("/delete/:id", (req, res) => {
  Video.deleteOne({ _id: req.params.id })
    .then(video => res.json(video))
    .catch(err =>
      res.status(404).json({ novideofound: `No video found with id` })
    );
});

// @route api/videos/user/categories
// @desc get categories list
// @access Public
router.get(
  "/user/categories",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    VideoCategory.find({ userId: "5c9492cd8cfeaa1de8734a53" })
      .then(data => res.json(data))
      .catch(err =>
        res.status(404).json({ nocategoriesfound: "nocategoriesfound" })
      );
  }
);

// @route api/videos/user/categories
// @desc post category to categories list
// @access Public
router.post(
  "/user/categories",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const data = {
      userId: "5c9492cd8cfeaa1de8734a53",
      name: req.body.name
    };
    // console.log(data);
    const newCategory = new VideoCategory(data);
    newCategory
      .save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
);

// @route GET api/videos/user/categories/:id
// @desc get category by id
// @access Public
router.get("/user/categories/current/:id", (req, res) => {
  // console.log(req.params.id);
  VideoCategory.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err =>
      res.status(404).json({ nocategoryfound: `No category found with id` })
    );
});

module.exports = router;
