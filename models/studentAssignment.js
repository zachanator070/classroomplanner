// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var findOrCreate = require('mongoose-findorcreate')

// Assignment schema
var assignmentSchema = new Schema({
  assignmentName: String,
  completed: Boolean,
  timeSubmitted: {type: Date, default: Date.now},
  student: String,
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
