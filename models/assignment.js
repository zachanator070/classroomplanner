// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var findOrCreate = require('mongoose-findorcreate')

// Assignment schema
var assignmentSchema = new Schema({
  subject: String,
  title: String,
  dueDate: {type: Date, default: Date.now},
  expDate: {type: Date, default: Date.now},
  instructor: String
});

// ensure schemas use virtual IDs
assignmentSchema.set('toJSON', {
  virtuals: true
});

// add findorCreate
assignmentSchema.plugin(findOrCreate);

// create item
var Assignment = mongoose.model('assignments', assignmentSchema);

module.exports = Assignment;
