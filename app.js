var http     = require('http'),
    express  = require('express'),
    db       = require('./model'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.route('/kittens').

  get(function(req, res) {
    db.Kitten.find(function (err, kittens) {
      if (err) console.error(err);
      return res.json(kittens);
    })
  }).

  post(function(req, res, next) {
    var kitten = db.Kitten({
      name: req.body.name
    });
    kitten.save();
    res.send(kitten);
  });

app.route('/kittens/:id').

  get(function(req, res) {
    db.Kitten.find({'_id': req.params.id}, function(err, kitten) {
      if (err) console.error(err);
      return res.json(kitten);
    })
  })

app.get('/', function(req, res) {
  res.render('index');
});

app.get('*', function(req, res) {
    res.send('Please request /kittens/ or /kittens/:id in the url');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
