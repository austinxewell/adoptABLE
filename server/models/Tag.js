const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
    tagName: {
      type: String,
    },
    // products: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product'
    //   }
    // ],
  },
);

// const Tag = model('Tag', tagSchema);

module.exports = tagSchema;