const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = Events = mongoose.model("events", EventSchema);