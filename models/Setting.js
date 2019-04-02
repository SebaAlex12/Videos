const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SettingSchema = new Schema({
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "users"
  // },
  youtube: {
    term: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      default: 45
    },
    visible: {
      term: {
        type: Boolean,
        default: true
      },
      amount: {
        type: Boolean,
        default: true
      }
    },
    childrenProtection: {
      type: Boolean,
      default: false
    },
    childrenSettings: {
      visible: {
        term: {
          type: Boolean,
          default: true
        },
        amount: {
          type: Boolean,
          default: true
        }
      }
    }
  }
});

module.exports = Setting = mongoose.model("setting", SettingSchema);
