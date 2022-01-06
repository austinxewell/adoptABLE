const mongoose = require('mongoose')

const { Schema } = mongoose;

const donateSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number
    },
    users:
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    });

const Donate = mongoose.model('Donate', donateSchema)

module.exports = Donate