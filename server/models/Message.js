const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const MessageSchema = new Schema(
  {
    sender: {
        type: String,
    },
    text: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }
  },
  {
    timestamps: true
  }
);

module.exports = MessageSchema;