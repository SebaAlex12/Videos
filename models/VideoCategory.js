const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoCategorySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: { type: String, required: true }
});

module.exports = VideoCategory = mongoose.model(
  "VideoCategories",
  VideoCategorySchema
);
