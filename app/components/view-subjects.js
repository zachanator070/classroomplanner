var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");

var TabBar = require('./tab-bar.js');
var SortableTable = require('./sortable-table.js');

var ViewSubjects = React.createClass({

	getInitialState: function () {

		this.reloadSubjects();
		return {
		    	data: []
		};
	},
	reloadSubjects: function() {
		api.getSubjects(localStorage.name, function(success, res) {
			console.log('succes in reloadSubjects? ' + success);
			var subjectData = res.subjects.map(function(subject) {
				return { subject: subject.name };
			});
			console.log("SubjectData: " + subjectData); //TEMP
			this.setState({data: subjectData});
			return;
		}.bind(this));
	},

	removeSubject: function(item) {

		api.deleteSubject(item.subject, this.reloadSubjects);

		console.log("Removing subject: " + item.subject); //TEMP
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: true},
				{tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: false}
			],
		};

		var columns = [
	            { header: "Subject", key: "subject"},
	            {} // Delete buttons column
        	];
		
		return <div>
			<TabBar  data={tabs} />
			<SortableTable data={this.state.data} columns={columns} removeRow={this.removeSubject}/>
		</div>
	}
});

module.exports = ViewSubjects;