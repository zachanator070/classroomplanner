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
		var assignments =  [
		      { title: "Read pg 12, ex 1-10", subject: "English 7" , student: "Billy Bob", dueDate: "11/12/15", expDate: "11/22/2015", submissions: '0', done: 'false'},
		      { title: "Read pg 18, ex 91-100", subject: "Math 7" , student: "Billy Bob", dueDate: "11/13/15", expDate: "11/23/2015", submissions: '1', done: 'true'},
		      { title: "Read pg 98, ex 4-8", subject: "Reading 7" , student: "Sally Sue", dueDate: "11/14/15", expDate: "11/24/2015", submissions: '0', done: 'false'},
		      { title: "Read pg 33, ex 1-5", subject: "English 7" , student: "Sally Sue", dueDate: "11/15/15", expDate: "11/25/2015", submissions: '1', done: 'true'}
		];
		return {
		      data: assignments,
		      displayedData: assignments,
		      studentSelected: '--Student--',
		      subjectSelected: '--Subject--'
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
					<h1>Late Assignments</h1>
					<SortableTable data={this.state.displayedData} columns={columns} />
				</div>

		</div>
	}
});

module.exports = StudentLateAssignments;
