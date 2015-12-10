// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

// User info, with items owned by that user
var subjectSchema = new Schema({
  name: String,
  instructor: String
});

// add findOrCreate
subjectSchema.plugin(findOrCreate);

// create user
var Subject = mongoose.model('subjects', subjectSchema);

module.exports = Subject;
