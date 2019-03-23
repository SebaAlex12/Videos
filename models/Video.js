const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  catId: {
    type: String,
    required: true
  },
  videoKey: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// VideoSchema.statics.findByUserId = function (id, callback) {
//   var query = this.findOne()

//   Video.findOne({'userId': id}, function (error, video) {
//     query.where(
//       {person1: person._id}
//     ).exec(callback);
//   })
//   return query
// }

module.exports = Video = mongoose.model("Video", VideoSchema);
