var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

var InstructorCurrentAssignments = React.createClass({

	getInitialState: function() {

		return {
		      data: [],
		      displayedData: [],
		      studentSelected: '--Student--',
		      subjectSelected: '--Subject--',
		      students: [],
		      subjects: []
		};
	},
	componentWillMount: function() {
		api.getStudentAssignmentsForInstructor(function(success, res) {
			var assignmentData = res.assignments.map(function(assignment) {

				var complete = "no";
				if(assignment.completed){
					complete = "yes";
				}

				var dueDateStrings = assignment.dueDate.split("-");
				var formatedDueDate = dueDateStrings[0]+"-"+dueDateStrings[1]+"-"+dueDateStrings[2].split("T")[0]; // year-month-day
				var expDateStrings = assignment.expDate.split("-");
				var formatedExpDate = expDateStrings[0]+"-"+expDateStrings[1]+"-"+expDateStrings[2].split("T")[0]; // year-month-day

				return {
					title:assignment.title,
					subject:assignment.subject,
					student: assignment.student,
					dueDate:formatedDueDate,
					expDate: formatedExpDate,
					completed:complete };
			});

			assignmentData = assignmentData.filter(function(assignment){

				var today = new Date();
				var expDate = new Date(assignment.expDate);

				if(assignment.completed == 'yes') {
					console.log('assignment completed');
					return false;
				}
				if(expDate > today) {
					console.log('expiration hasnt date passed');
					return false;
				}
				return true;
			});

			this.setState({data: assignmentData, displayedData: assignmentData});
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
	handleSubjectChange: function(event) {
		console.log(event.target.value);
		this.filterData(this.state.studentSelected, event.target.value);
	},
	handleStudentChange: function(event) {
		console.log(event.target.value);
		this.filterData(event.target.value, this.state.subjectSelected);
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
					<div className="col-md-2 ">
						<Dropdown items={this.state.subjects}
							selected={this.state.subjectSelected}
							handleChange={this.handleSubjectChange} />
					</div>
					<div className="col-md-2 ">
						<Dropdown items={this.state.students}
							selected={this.state.studentSelected}
							handleChange={this.handleStudentChange} />
					</div>
					<SortableTable data={this.state.displayedData} columns={columns} />
				</div>
		</div>
	}
});

module.exports = InstructorCurrentAssignments;
