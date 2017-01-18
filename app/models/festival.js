'use strict';

const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  venue: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  comment: {
    type: String,
    required: false,
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // owner_email: {
  //   type: String,
  //   default: user.credentials.email,
  // },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      let userId = (options.user && options.user._id) || false;
      ret.editable = userId && userId.equals(doc._owner);
      return ret;
    },
  },
});

// festivalSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Festival = mongoose.model('Festival', festivalSchema);

module.exports = Festival;
