const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  try {
    const result = await Product.find({})
      .select('name desc price quantity sizes series thumb slider')
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

