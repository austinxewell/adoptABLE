const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true
    },
    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Category = model('Category', categorySchema);

module.exports = Category;