const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
    tagName: {
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

const Tag = model('Tag', tagSchema);

module.exports = Tag;