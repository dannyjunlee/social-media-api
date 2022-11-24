const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatTime
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

function formatTime(date) {
    return date.toString().slice(0, 10);
};

// Virtual
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Initialize
const Thought = model('thought', thoughtSchema);

module.exports = Thought;