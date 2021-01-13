const express = require('express');
const router = express.Router();
const SeriesController = require('../controllers/collection.controller');

router.get('/collections', SeriesController.getCollection);

module.exports = router;
