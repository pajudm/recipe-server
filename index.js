const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const app = express();

const PORT = 80;

const MONGO_ADDRESS = process.env.MONGO_ADDRESS || 'db'
const MONGO_PORT = process.env.MONGO_PORT || '27017'

mongoose.connect('mongodb://' + MONGO_ADDRESS + ':' + MONGO_PORT + '/recipes');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Successfully');
});
mongoose.connection.on('error', (error) => {
    console.error('Failed to connect to MongoDB.');
    console.error(error);
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res) => {
    return res.json({
        msg: 'Sending data'
    })
});

app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
});
