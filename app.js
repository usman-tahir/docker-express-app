
var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

// Database setup
mongoose.connect('mongodb://mongo:27017');

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.listen(3000, function() {
    console.log('Listening on http://localhost:3000');
});