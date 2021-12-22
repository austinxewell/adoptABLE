const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
    tagName: {
      type: String,
    }
  },
);

const Tag = model('Tag', tagSchema);

module.exports = Tag;