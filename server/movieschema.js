const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        plot: String,
        genres: [String],
        runtime: Number,
        rated: String,
        cast: [String],
        num_mflix_comments: Number,
        poster: String,
        title: String,
        fullplot: String,
        languages: [String],
        released: Date,
        directors: [String],
        writers: [String],
        awards: {
          wins: Number,
          nominations: Number,
          text: String
        },
        lastupdated: Date,
        year: Number,
        imdb: {
          rating: Number,
          votes: Number,
          id: Number
        },
        countries: [String],
        type: String,
        tomatoes: {
          viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
          },
          dvd: Date,
          critic: {
            rating: Number,
            numReviews: Number,
            meter: Number
          },
          lastUpdated: Date,
          rotten: Number,
          production: String,
          fresh: Number
        }
    }      
)

module.exports = mongoose.model('Movies', MovieSchema);