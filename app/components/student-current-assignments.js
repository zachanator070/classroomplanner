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
		var assignments =  api.getStudentAssignments(localStorage.name);

		return {
		      displayedData: assignments
		};
	},

	render: function() {

		var columns = [
	            { header: "Title", key: "title"},
	            { header: "Subject", key: "subject"},
	            { header: "Student", key: "student"},
	            { header: "Due Date", key: "dueDate"},
	            { header: "Expiration Date", key: "expDate"},
	            { header: "Submissions", key: "submissions"},
	            { header: "Done", key: "done"},
        	];
		return <div>

				<div className="tabContent">
					<h1>Current Assignments</h1>
					<SortableTable data={this.state.displayedData} columns={columns} />
				</div>

		</div>
	}
});

module.exports = StudentCurrentAssignments;
