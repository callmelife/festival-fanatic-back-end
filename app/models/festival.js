'use strict';

const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
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
    required: true,
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
