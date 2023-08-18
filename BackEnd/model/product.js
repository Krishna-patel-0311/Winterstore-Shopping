const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    require: true
  },
  pbrand: {
    type: String,
    require: true
  },
  pdesc: {
    type: String,
    require: true
  },
  pcategory: {
    type: String,
    require: true
  },
  pmrp: {
    type: String,
    require: true
  },
  pprice: {
    type: String,
    require: true
  },
  pidealfor: {
    type: String,
    require: true
  },
  pimage: {
    type: String,
    require: true
  },
  isActive: {
    type: Boolean,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Product', productSchema);
