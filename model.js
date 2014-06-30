var mongoose = require('mongoose');

// Mongoose Connection
mongoose.connect('mongodb://localhost/api');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
 // yay
});

// Kittens
var kittySchema = mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
};

// Puppies
var puppySchema = mongoose.Schema({
    name: String
});
puppySchema.methods.speak = function () {
  var greeting = this.name
    ? "Woof! My name is " + this.name
    : "I don't have a woof name..."
  console.log(greeting);
};

// Exports
exports.Kitten = mongoose.model('Kitten', kittySchema);
exports.Puppy = mongoose.model('Puppy', puppySchema);