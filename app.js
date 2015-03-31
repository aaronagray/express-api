var http     = require('http'),
    express  = require('express'),
    db       = require('./model');

var app = express();

app.route('/kittens').

  get(function(req, res) {
    db.Kitten.find(function (err, kittens) {
      if (err) console.error(err);
      return res.json(kittens);
    })
  }).

  post(function(req, res) {
    console.log('posted to kittnes')
  })

app.route('/kittens/:id').

  get(function(req, res) {
    db.Kitten.find({'_id': req.params.id}, function(err, kitten) {
      if (err) console.error(err);
      return res.json(kitten);
    })
  })

app.get('/', function(req, res) {
  res.send('Please request /kittens/ or /kittens/:id in the url');
});

app.get('*', function(req, res) {
    res.send('Please request /kittens/ or /kittens/:id in the url');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
