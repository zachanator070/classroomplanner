var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

var InstructorCurrentAssignments = React.createClass({

	getInitialState: function() {
		//this.reloadAssignments();
        // var assignments will be replaced with api call
        var assignments = api.getStudentAssignmentsByInstructor(localStorage.name);
        console.log('here we go');
        console.log(assignments);
		// var assignments =  [
		//       { title: "Read pg 12, ex 1-10", subject: "English 7" , student: "Billy Bob", dueDate: "11/12/15", expDate: "11/22/2015", submissions: '0', done: 'false'},
		//       { title: "Read pg 18, ex 91-100", subject: "Math 7" , student: "Billy Bob", dueDate: "11/13/15", expDate: "11/23/2015", submissions: '1', done: 'true'},
		//       { title: "Read pg 98, ex 4-8", subject: "Reading 7" , student: "Sally Sue", dueDate: "11/14/15", expDate: "11/24/2015", submissions: '0', done: 'false'},
		//       { title: "Read pg 33, ex 1-5", subject: "English 7" , student: "Sally Sue", dueDate: "11/15/15", expDate: "11/25/2015", submissions: '1', done: 'true'}
		// ];
		// data and displayedData should be initialized to 
		return {
		      data: [],
		      displayedData: [],
		      studentSelected: '--Student--',
		      subjectSelected: '--Subject--',
		      students: []
		};
	},
	reloadAssignments: function() {

		api.getStudents( function(success, res) {

			var studData = res.users.map(function(student) {
				return { name: student.name, password: student.password };
			});
			console.log(studData); //TEMP
			this.setState({data: studData});
			return;
		}.bind(this));
	},
	filterData: function(studentSelected, subjectSelected) {
		var filtered = this.state.data;
		if(subjectSelected !== '--Subject--') {
			var filtered = filtered.filter(function(item) {
				return (item.subject == subjectSelected);
			});
		};
		if(studentSelected !== '--Student--') {
			var filtered = filtered.filter(function(item) {
				return (item.student == studentSelected);
			});
		};
		this.setState({
			displayedData: filtered,
			studentSelected: studentSelected,
			subjectSelected: subjectSelected
		});
	},
	handleSubjectDropdown: function(selected) {
		console.log(selected);
		this.filterData(this.state.studentSelected, selected);
	},
	handleStudentDropdown: function(selected) {
		console.log(selected);
		this.filterData(selected, this.state.subjectSelected);
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "Current Assignments", tabLink: "#/instructorassignments/current", active: true},
				{tabName: "Late Assignments", tabLink: "#/instructorassignments/late", active: false},
				{tabName: "Expired Assignments", tabLink: "#/instructorassignments/expired", active: false}
			],
		};

		var columns = [
	            { header: "Title", key: "title"},
	            { header: "Subject", key: "subject"},
	            { header: "Student", key: "student"},
	            { header: "Due Date", key: "dueDate"},
	            { header: "Expiration Date", key: "expDate"},
	            { header: "Submissions", key: "submissions"},
	            { header: "Done", key: "done"},
        	];

	      var subjectDropdown = {
	            title: '--Subject--', //What should show up on the button to open/close the dropdown
	            items: [ // List of items to show in the dropdown
	            		'--Subject--',
	            		'Math 7',
	            		'English 7',
	            		'Reading 7'
	            ]
	      };

	      var studentDropdown = {
	            title: '--Student--', //What should show up on the button to open/close the dropdown
	            items: [ // List of items to show in the dropdown
	            		'--Student--',
	            		'Billy Bob',
	             	'Sally Sue'
	            ]
	      };

		return <div>
			<TabBar  data={tabs} />

				<div className="tabContent">
					<div className="col-md-2 filterBy">Filter by:</div>
					<div className="col-md-2 "><Dropdown title={subjectDropdown.title} items={subjectDropdown.items} itemSelected={this.handleSubjectDropdown} /></div>
					<div className="col-md-2 "><Dropdown title={studentDropdown.title} items={studentDropdown.items} itemSelected={this.handleStudentDropdown} /></div>
					<SortableTable data={this.state.displayedData} columns={columns} />
				</div>

		</div>
	}
});

module.exports = InstructorCurrentAssignments;
