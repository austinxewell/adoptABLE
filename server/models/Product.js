const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema(
  {
    productName: {
      type: String,
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
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;
