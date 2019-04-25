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
    if (req.user.settingsId) {
      Setting.findOne({ _id: req.user.settingsId })
        .then(settings => res.json(settings))
        .catch(err =>
          res.status(404).json({ nosettingsfound: `No settings found` })
        );
    } else {
      res.status(404).json({ nosettingsfound: `No settings found` });
    }
  }
);

// @route UPDATE api/settings/update/:id
// @desc update settings
// @access Public
router.post(
  `/update/:id`,
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // prepare all data to save
    // console.log(req.body);
    const settData = {
      // userId: req.body.userId,
      youtube: {
        term: req.body.settings.term,
        amount: req.body.settings.amount,
        visible: {
          term: true,
          amount: true
        }
        // childrenProtection: req.body.childrenProtection,
        // childrenSettings: {
        //   visible: {
        //     term: req.body.termChildrenVisible,
        //     amount: req.body.amountChildrenVisible
        //   }
        // }
      }
    };

    // console.log("apisettings", settData);

    Setting.findOne({ _id: req.params.id }).then(setting => {
      if (setting) {
        Setting.findOneAndReplace({ _id: req.params.id }, settData)
          .then(data => {
            return res.json(data);
          })
          .catch(err => res.json(err));
      } else {
        const insertSetting = new Setting(settData);
        insertSetting
          .save()
          .then(data => res.data(data))
          .catch(err => res.json(err));
      }
    });
  }
);

module.exports = router;
