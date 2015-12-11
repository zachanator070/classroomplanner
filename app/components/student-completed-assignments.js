var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

var StudentCompletedAssignments = React.createClass({


		getInitialState: function() {
	        // var assignments will be replaced with api call
					this.reloadAssignments();
					return {displayedData:[]};
		},
		reloadAssignments: function() {
			api.getStudentAssignments(localStorage.name, function(success, res) {
				var assignmentData = res.assignments.map(function(assignment) {

					var complete = "no";
					if(assignment.completed){
						complete = "yes";
					}

					return {
						title:assignment.title,
						subject:assignment.subject,
						dueDate:assignment.dueDate,
						completed:complete };
				});

				console.log(assignmentData);

				assignmentData = assignmentData.filter(function(assignment){
					if(assignment.completed === "yes"){
						return true;
					}
					else{
						return false;
					}
					console.log(assignmentData);
				});
				this.setState({displayedData: assignmentData});
				return;
			}.bind(this));
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
						<h1>Completed Assignments</h1>
						<SortableTable data={this.state.displayedData} columns={columns} />
					</div>

			</div>
		}
});

module.exports = StudentCompletedAssignments;
