// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

// use this if we want to hash passwords
// // setup bcrypt
// var bcrypt = require('bcrypt');
// var SALT = bcrypt.genSaltSync();

// setup json web token
var jwt = require('jsonwebtoken');
var SECRET = '\x1f\x1e1\x8a\x8djO\x9e\xe4\xcb\x9d`\x13\x02\xfb+\xbb\x89q"F\x8a\xe0a';

// User info, with items owned by that user
var userSchema = new Schema({
  name: String,
  password: String,
  type: String,
  subjects:[],
  instructor: String
});

// check the password
userSchema.methods.checkPassword = function(password) {
  return password === this.password;
};

// Generate a token for a client
userSchema.statics.generateToken = function(name) {
  return jwt.sign({ name: name }, SECRET);
};

// Verify the token from a client. Call the callback with a user object if successful or null otherwise.
userSchema.statics.verifyToken = function(token,cb) {
  if (!token) {
    cb(null);
    return;
  }
  // decrypt the token and verify that the encoded user id is valid
  jwt.verify(token, SECRET, function(err, decoded) {
    if (!decoded) {
      cb(null);
      return;
    }
    User.findOne({name: decoded.name},function(err,user) {
      if (err) {
	cb(null);
      } else {
	cb(user);
      }
    });
  });
};

// add findOrCreate
userSchema.plugin(findOrCreate);

// create user
var User = mongoose.model('users', userSchema);

module.exports = User;
