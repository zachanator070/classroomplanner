var React = require('react');
var ReactRouter = require("react-router");

var TabBar = require('./tab-bar.js');
var SortableTable = require('./sortable-table.js');

var ViewSubjects = React.createClass({

	getInitialState: function () {
		return {
		    	data: [
		        	{ id: 3, name: "Billy Bob", class: "B" },
		        	{ id: 1, name: "Tina Turner", class: "A" },
		        	{ id: 2, name: "Ken Doll", class: "A" },
		        	{ id: 4, name: "Mary Joseph", class: "C" }
		    	]
		};
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: true},
				{tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: false}
			],
		};

		var columns = [
	            { header: "ID", key: "id"},
	            { header: "NAME", key: "name" }, 
	            { header: "CLASS", key: "class"}
        	];
		
		return <div>
			<TabBar  data={tabs} />
			<SortableTable data={this.state.data} columns={columns} />
		</div>
	}
});

module.exports = ViewSubjects;