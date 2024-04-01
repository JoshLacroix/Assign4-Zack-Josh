require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./database/database');
const clientRouter = require('./router');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.use('/', clientRouter)

const port = process.env.PORT || 8080;
app.listen(port, () => {
    connect()
    console.log("Server listening on port " + port)
})