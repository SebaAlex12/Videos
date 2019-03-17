const express = require("express");
const router = express.Router();
const passport = require("passport");

const Setting = require("../../models/Setting");

// @route GET api/settings
// @desc get settings
// @access Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.user);
    // console.log("get set");
    Setting.find()
      .then(settings => res.json(settings))
      .catch(err =>
        res.status(404).json({ nosettingsfound: `No settings found` })
      );
  }
);

// @route UPDATE api/settings/update
// @desc update settings
// @access Public
router.post(
  `/update/`,
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // prepare all data to save
    const settData = {
      userId: req.body.userId,
      youtube: {
        term: req.body.term,
        amount: req.body.amount,
        visible: {
          term: req.body.termUserVisible,
          amount: req.body.amountUserVisible
        },
        childrenProtection: req.body.childrenProtectionOn
          ? req.body.childrenProtectionOn
          : false,
        childrenSettings: {
          visible: {
            term: req.body.termChildrenVisible,
            amount: req.body.amountChildrenVisible
          }
        }
      }
    };
    console.log(req.body.userId);
    Setting.findOne({ userId: req.body.userId }).then(setting => {
      if (setting) {
        console.log("findoneandreplace");
        console.log(settData);
        Setting.findOneAndReplace({ userId: req.body.userId }, settData)
          .then(data => res.json(data))
          .catch(err => res.json(err));
      } else {
        const insertSetting = new Setting(settData);
        insertSetting
          .save()
          .then(data => res.json(data))
          .catch(err => res.json(err));
      }
    });
  }
);

module.exports = router;
