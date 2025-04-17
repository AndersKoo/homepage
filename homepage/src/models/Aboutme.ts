const { model, Schema } = require("mongoose");

const aboutmeSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  thumbsUp: Number,
  thumpsDown: Number,
});

module.exports = model("Aboutme", aboutmeSchema);
