const mongoose = require('mongoose');

const databaseName = 'web'
const url = `${process.env.DB_CONNECTION_STRING}/${databaseName}`; // edit this

async function connect() {
    await mongoose.connect(url);
    console.log('Connected successfully to MongoDB database');

    return 'done.';
}

module.exports = {
    connect
}