var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

var InstructorCurrentAssignments = React.createClass({

	getInitialState: function() {

		this.reloadAssignments();

		return {
		      data: [],
		      displayedData: [],
		      studentSelected: '--Student--',
		      subjectSelected: '--Subject--',
		      students: [],
		      subjects: []
		};
	},
	reloadAssignments: function() {
		api.getStudentAssignmentsForInstructor(function(success, res) {
			var assignmentData = res.assignments.map(function(assignment) {

				return {
					title:assignment.title,
					subject:assignment.subject,
					student: assignment.student,
					dueDate:assignment.dueDate,
					expDate: assignment.expDate,
					completed:assignment.completed };
			});
			console.log('before we setSTate');
			console.log(assignmentData);
			this.setState({data: assignmentData, displayedData: assignmentData});
			return;
		}.bind(this));

		api.getSubjects(localStorage.name, function(success, res) {
			var subjectData = [];
			subjectData.push('--Subject--');
			res.subjects.map(function(subject) {
				subjectData.push(subject.name);
			});
			this.setState({subjects: subjectData});
		}.bind(this));

		api.getStudents( function(success, res) {
			var studData = [];
			studData.push('--Student--');
			res.users.map(function(student) {
				studData.push(student.name);
			});
			this.setState({students: studData});
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
				{tabName: "Current Assignments", tabLink: "#/instructorassignments/current", active: false},
				{tabName: "Late Assignments", tabLink: "#/instructorassignments/late", active: false},
				{tabName: "Expired Assignments", tabLink: "#/instructorassignments/expired", active: true}
			],
		};

		var columns = [
	            { header: "Title", key: "title"},
	            { header: "Subject", key: "subject"},
	            { header: "Student", key: "student"},
	            { header: "Due Date", key: "dueDate"},
	            { header: "Expiration Date", key: "expDate"},
	            { header: "Completed", key: "completed"},
        	];

		return <div>
			<TabBar  data={tabs} />

				<div className="tabContent">
					<div className="col-md-2 filterBy">Filter by:</div>
					<div className="col-md-2 "><Dropdown title={this.state.subjectSelected} items={this.state.subjects} itemSelected={this.handleSubjectDropdown} /></div>
					<div className="col-md-2 "><Dropdown title={this.state.studentSelected} items={this.state.students} itemSelected={this.handleStudentDropdown} /></div>
					<SortableTable data={this.state.displayedData} columns={columns} />
				</div>

		</div>
	}
});

module.exports = InstructorCurrentAssignments;
