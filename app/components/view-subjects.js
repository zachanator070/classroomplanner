var React = require('react');
var ReactRouter = require("react-router");

var TabBar = require('./tab-bar.js');
var SortableTable = require('./sortable-table.js');

var ViewSubjects = React.createClass({

	getInitialState: function () {
		return {
		    	data: [
		        	{ subject: 'English 7' },
		        	{ subject: 'Math 8' },
		        	{ subject: 'Reading 7' },
		        	{ subject: 'Spanish 7' }
		    	]
		};
	},

	removeSubject: function(item) {
		// < -- insert api call here!!
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
			<div className ="tabContent">
				<SortableTable data={this.state.data} columns={columns} removeRow={this.removeSubject}/>
			</div>
		</div>
	}
});

module.exports = ViewSubjects;
