const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thingSchema = new Schema({
  title: { type: String},
  description: { type: String},
  imageUrl: { type: String, required: true }
})

const Image = mongoose.model('Image', thingSchema);
module.exports = Image;