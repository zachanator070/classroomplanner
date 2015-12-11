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
  completed: Boolean,
  dateSubmitted: {type: Date, default: Date.now},
  student: String,
  instructor: String
});

// ensure schemas use virtual IDs
assignmentSchema.set('toJSON', {
  virtuals: true
});

// add findorCreate
assignmentSchema.plugin(findOrCreate);

// create assignment
var StudentAssignment = mongoose.model('studentAssignments', assignmentSchema);

module.exports = StudentAssignment;
