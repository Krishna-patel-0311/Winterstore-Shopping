const mongoose = require('mongoose');
const now = new Date();
const options = { timeZone: 'Asia/Kolkata', dateStyle: 'short' };
const indiaDate = now.toLocaleDateString('en-IN', options);
const cartSchema = new mongoose.Schema({
  CustomerId: {
    type: String,
    require: true
  },
  ProductId: {
    type: String,
    require: true
  },
  ItemQuantity: {
    type: String,
    require: true
  },
  TotalPrice: {
    type: String,
    require: true
  },
  DateAdded: {
    type: String,
    default: indiaDate
  }
});

module.exports = mongoose.model('cart',cartSchema );
