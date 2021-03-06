const Series = require('../models/collection.model');

exports.getCollection = async (req, res) => {
  try {
    const result = await Series.find({})
      .select('name price series image')
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

