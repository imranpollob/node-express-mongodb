const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// db
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// check for connection
db.once('open', ()=>{
    console.log('Connected to MongoDB');
});

// check for db errors
db.on('error', function(err){
    console.log(err);
});


// init app
const app = express();

// bring db models
let Article = require('./models/articles');

// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// home route
app.get('/pollob', function(req, res) {
    res.send('Hello Pollob!!');
});

// articles
app.get('/', function(req, res) {
    
    Article.find({}, function(err, articles){
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                title: "Articles",
                articles: articles
            });
        }
    });
});

// add article
app.get('/articles/add', function(req, res) {
    res.render('add_article', {
        title: "Add New Article"
    });
});




// start server
app.listen(3000, function () {
    console.log('Server is running on 3000 port');
});