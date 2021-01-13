const express = require('express');
const mongoose = require('mongoose');
//const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

/* MIDDLEWARE */
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
const productRoutes = require('./routes/product.routes');
const seriesRoutes = require('./routes/collection.routes');
const orderRoutes = require('./routes/order.routes');

app.use('/api', productRoutes);
app.use('/api', seriesRoutes);
app.use('/api', orderRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
//app.use(express.static(path.join(__dirname, '../public')));
//app.use('*', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html'));});

/* MONGOOSE */
//mongoose.connect('mongodb://localhost:27017/sosoDB', {
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xojjv.mongodb.net/sosoDB?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('👍🏼'));

const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database 👍🏼');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
