const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        // Check this
        reactionId: Schema.Types.ObjectId,
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatTime
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

function formatTime(date) {
    return date.toString().slice(0, 10);
};

module.exports = reactionSchema;