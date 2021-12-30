const { Schema, model } = require('mongoose');
const MessageSchema = require('./Message');


const ConversationSchema = new Schema(
  {
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    messages: [MessageSchema]
  },
  {
    timestamps: true
  }
);

const Conversation = model('Conversation', ConversationSchema);

module.exports = Conversation;