const express = require('express');
const path = require('path');

// init app
const app = express();


// home route
app.get('/', function(req, res) {
    res.send('Hello Pollob');
});

// start server
app.listen(3000, function () {
    console.log('Server is running on 3000 port');
});