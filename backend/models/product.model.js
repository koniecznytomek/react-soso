const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: 'No descriptions' },
  price: { type: String, required: true },
  quantity: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);
