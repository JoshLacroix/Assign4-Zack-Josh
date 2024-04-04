const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    favorite_movie_genre: {
        type: String,
        enum: ['Drama','Comedy','Action','Sci-Fi','Animation','History','Horror','Romance'],
        required: true
    },
    terms_and_condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Client', ClientSchema);