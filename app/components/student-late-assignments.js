var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

var StudentLateAssignments = React.createClass({
	getInitialState: function() {
				// var assignments will be replaced with api call
				this.reloadAssignments();
				return {displayedData:[]};
	},
	reloadAssignments: function() {
		api.getStudentAssignments(localStorage.name, function(success, res) {
			var assignmentData = res.assignments.map(function(assignment) {

				return {
					title:assignment.title,
					subject:assignment.subject,
					dueDate:assignment.dueDate,
					completed:assignment.completed };
			});

			assignmentData = assignmentData.filter(function(assignment){
				if(assignment.completed){
					return false;
				}
				else{
					var today = new Date();
					var dueDate = Date.parse(assignment.dueDate);
					console.log("unformatted:");
					console.log(dueDate);
					if(dueDate < today.getUTCDate()){
						console.log("today:");
						console.log(today);
						console.log("due:");
						console.log(dueDate);
						console.log("< compare");
						console.log(dueDate<today);
							return true;
					}
					return false;
				}
			});
			this.setState({displayedData: assignmentData});
			return;
		}.bind(this));
	},
	markCompleted:function(assignment){
		api.updateStudentAssignment(assignment, this.reloadAssignments);
	},

	render: function() {

		var columns = [
							{ header: "Title", key: "title"},
							{ header: "Subject", key: "subject"},
							{ header: "Due Date", key: "dueDate"},
							{ header: "Done", key: "completed"},
					];
		return <div>

				<div className="tabContent">
					<h1>Late Assignments</h1>
					<SortableTable data={this.state.displayedData} columns={columns} checkBox={this.markCompleted}/>
				</div>

		</div>
	}
});

module.exports = StudentLateAssignments;
