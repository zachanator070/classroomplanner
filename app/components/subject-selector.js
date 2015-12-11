var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');

var SubjectSelector = React.createClass({

	getInitialState: function () {

		this.reloadStudents();
		return {
		    	students: [],
		    	subjects: [],
		    	selected: '--All Students--',
		    	checkboxes: []
		};
	},

	reloadStudents: function() {

		api.getStudents( function(success, res) {
			var studData = [];
			studData.push('--All Students--');
			res.users.map(function(student) {
				studData.push(student.name);
			}.bind(studData));
			this.setState({students: studData});
		}.bind(this));

		api.getSubjects(localStorage.name, function(success, res) {
			if(res.subjects) {
				var subjectData = res.subjects.map(function(subject, i) {
					return {subject: subject.name};
				});
				this.setState({subjects: subjectData});
			}
			return;
		}.bind(this));
	},

	saveStudentSubjects: function() {

		// save subjects for the 'selected student'
		console.log('in subejct-selector.js');
		console.log(this.state.selected);
		console.log(this.state.checkboxes);
		api.updateStudent(this.state.selected, this.state.checkboxes, function(success, res) {
			console.log("successfully updated Student: " + success);
		});

		console.log("Saving subjects for: " + this.state.selected); //TEMP
	},

	handleStudentDropdown: function(selected) {
		console.log(selected);
		api.getStudent(selected, function(success, res) {
			if(success) {
				console.log(res.user[0].subjects); //TEMP
				this.setState({selected: selected, checkboxes: (res.user[0].subjects || null)});
			}
		}.bind(this));
	},
	handleCheckboxChange: function(event) {

		if(event.target.checked) {
			this.state.checkboxes.push(event.target.value);
		}
		else {
			var index = this.state.checkboxes.indexOf(event.target.value);
			this.state.checkboxes.splice(index, 1);
		}
		console.log(this.state.checkboxes);
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Students", tabLink: "#/studentmanager/viewall", active: false},
				{tabName: "Add Students", tabLink: "#/studentmanager/add", active: false},
				{tabName: "Subject Selector", tabLink: "#/studentmanager/subjectselector", active: true}
			],
		};

		var checkboxes = this.state.subjects.map(function(subData, i) {
			console.log(this.state.checkboxes.indexOf(subData.subject) != -1);
			return (
		        <form key={i}>
				<label><input
		            type="checkbox"
		            defaultChecked={this.state.checkboxes.indexOf(subData.subject) != -1}
		            value={subData.subject}
		            onChange={this.handleCheckboxChange} 
		            ref={subData.subject}/>{subData.subject}</label>< br/>
		        </form>
			);
		}.bind(this));

		return <div>
			<TabBar  data={tabs} />
			<div className="tabContent">
				<Dropdown title={this.state.selected} items={this.state.students} itemSelected={this.handleStudentDropdown} />
				{ this.state.selected === '--All Students--' ? null : checkboxes}
				<button className="btn btn-default"
					type="submit"
					disabled={this.state.selected === '--All Students--'}
					onClick={this.saveStudentSubjects} >
					Save Subjects
				</button>
			</div>
		</div>
	}
});

module.exports = SubjectSelector;
