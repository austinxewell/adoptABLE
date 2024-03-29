const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const tagSchema = require('./Tag');

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true
    },
    productNote: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    tags: [tagSchema]
  },
);

const Product = model('Product', productSchema);

module.exports = Product;
