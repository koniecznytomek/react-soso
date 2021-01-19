const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: 'No descriptions' },
  price: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  sizes: { type: Array },
  series: { type: String },
  thumb: { type: String },
  slider: [
    {
      src: String,
      alt: String,
    },
  ],
});

module.exports = mongoose.model('Product', productSchema);
