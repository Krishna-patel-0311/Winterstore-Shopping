const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
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
  DateAdded: {
    type: Date,
    default: Date.now
  },
  IsActive: {
    type: Boolean,
    default: true
  },
  IsAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
