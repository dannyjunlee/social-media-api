const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialMediaApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;