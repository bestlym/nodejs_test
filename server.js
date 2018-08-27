var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
});

let server = app.listen(8000, () => {
    console.log('Load Success!');
});