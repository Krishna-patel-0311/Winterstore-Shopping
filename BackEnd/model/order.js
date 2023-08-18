const mongoose = require('mongoose');
const now = new Date();
const options = { timeZone: 'Asia/Kolkata', dateStyle: 'short' };
const indiaDate = now.toLocaleDateString('en-IN', options);
const OrderSchema = new mongoose.Schema({
  OrderId: {
    type: String,
    require: true
  }, 
  ProductId: {
      type: String,
      require: true
    },
    CustomerId: {
        type: String,
        require: true
      }, CustomerName: {
        type: String,
        require: true
      },
      Address: {
        type: String,
        required: true
      },
      City: {
        type: String,
        required: true
      },
      State: {
        type: String,
        required: true
      },
      Zip: {
        type: String,
        required: true
      },
      Phone: {
        type: String,
        required: true
      },
      TotalPrice: {
        type: String,
        require: true
      },
      PaymentMethod:{
        type: String,
        require: true
      },
      OrderStatus:{
        type: String,
        require: true,
        default:"Ordered"
      },
      DateAdded: {
        type: String,
        default: indiaDate
      }
});

module.exports = mongoose.model('Order', OrderSchema);