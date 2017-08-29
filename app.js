
var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.listen(3000, function() {
    console.log('Listening on http://localhost:3000');
});