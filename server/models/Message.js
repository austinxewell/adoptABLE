const { Schema } = require('mongoose');


const MessageSchema = new Schema(
  {
    sender: {
        type: String,
    },
    text: {
        type: String,
    },
  },
  {
    timestamps: true
  }
);

module.exports = MessageSchema;