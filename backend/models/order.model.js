const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  comments: { type: String },
  order: [
    {
      name: String,
      price: Number,
      quantity: Number,
      size: String,
      thumb: String,
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
