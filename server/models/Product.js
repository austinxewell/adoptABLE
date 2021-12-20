const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    username: {
      type: String,
      required: true
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;
