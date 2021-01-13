const Order = require('../models/order.model');

exports.sendOrder = async (req, res) => {
  try {
    const { email, fullname, phone, address, comments, order } = req.body;
    const newOrder = new Order({
      email: email,
      fullname: fullname,
      phone: phone,
      address: address,
      comments: comments,
      order: order,
    });
    await newOrder.save();
    res.json({ newOrder });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const result = await Order.find({})
      .select('email fullname phone address comments order')
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
