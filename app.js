var http = require('http');
var express = require('express');
var db = require('./model');

var app = express();

app.route('/kittens')
  .get(function(req, res) {
    db.Kitten.find(function (err, kittens) {
      if (err) console.error(err);
      return res.json(JSON.stringify(kittens));
    })
  })
  .post(function(req, res) {
    console.log('posted to kittnes')
  })

app.route('/kittens/:id')
  .get(function(req, res) {
    db.Kitten.find({'_id': req.params.id}, function(err, kitten) {
      if (err) console.error(err);
      return res.json(JSON.stringify(kitten));
    })
  })

app.get('/', function(req, res) {
  res.send('Please request /kittens/ or /kittens/:id in the url');
});

app.get('*', function(req, res) {
    res.send('Please request /kittens/ or /kittens/:id in the url');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});