var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

var StudentCurrentAssignments = React.createClass({

	getInitialState: function() {
        // var assignments will be replaced with api call
				this.reloadAssignments();
				return {displayedData:[]};
	},
	reloadAssignments: function() {
		api.getStudentAssignments(localStorage.name, function(success, res) {
			var assignmentData = res.assignments.map(function(assignment) {

				var strings = assignment.dueDate.split("-");

				var year = strings[0];
				var month = strings[1];
				var day = strings[2].split("T")[0];

				var formatedDate = year+"-"+month+"-"+day

				return {
					title:assignment.title,
					subject:assignment.subject,
					dueDate:formatedDate,
					completed:assignment.completed };
			});

			assignmentData = assignmentData.filter(function(assignment){
				if(assignment.completed){
					return false;
				}
				else{
					var today = new Date();
					var dueDate = new Date(assignment.dueDate);

					if(dueDate < today){
							return false;
					}

					return true;
				}
			});
			this.setState({displayedData: assignmentData});
			return;
		}.bind(this));
	},
	markCompleted:function(assignment){
		api.updateStudentAssignment(assignment, this.reloadAssignments);
		console.log(assignment);
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
					<h1>Current Assignments</h1>
					<SortableTable data={this.state.displayedData} columns={columns} checkBox={this.markCompleted}/>
				</div>

		</div>
	}
});

module.exports = StudentCurrentAssignments;
