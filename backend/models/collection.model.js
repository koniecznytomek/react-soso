const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  series: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Collection',collectionSchema);
