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
    required: true,
    validate: {
      validator: function(v) {
        let jpg = "jpg";
        let png = "png";
        let gif = "gif";
        let extensionString = v.split('.').pop();
        if (extensionString === jpg) {
          return true;
        }
        else if (extensionString === png) {
          return true;
        }
        else if (extensionString === gif) {
          return true;
        }
        else {
          return false;
        }
          },
          message: "It appears that the URL you've tried to upload to the database is not an image URL or the URL uses an extension that is not accepted by this application. All URLs entered into the field MUST end with '.jpg', '.png', or '.gif' and must not have any character after the file extension."
        },
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
