require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 4000
// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.set('strictQuery',false)
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true})
const db = mongoose.connection

db.on('error',(error) => {console.log('Error')})
db.on('open',() => {console.log('Database connected successfully')})
// Routes

const user = require('./routes/user');
const product = require('./routes/product');
const cart = require('./routes/cart');
const order = require('./routes/order');
app.use('/', user);
app.use('/product', product);
app.use('/cart',cart );
app.use('/order',order );
// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
