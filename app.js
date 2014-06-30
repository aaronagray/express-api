var http = require('http');
var express = require('express');
var db = require('./model');

var app = express();

app.get('/kittens', function(req, res) {
  // res.set('json spaces', 40);
  db.Kitten.find(function (err, kittens) {
    if (err) console.error(err);
    return res.json(JSON.stringify(kittens));
  })
});

app.get('/kittens/:id', function(req, res) {
  res.set('json spaces', 40);
  db.Kitten.find({'_id': req.params.id}, function(err, kitten) {
    if (err) console.error(err);
    return res.json(JSON.stringify(kitten));
  })
});

app.get('/', function(req, res) {
  res.send('Please request /kittens/ in the url. Or, ask for a kitten by ID with /kittens/:id.');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});