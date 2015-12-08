var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var SortableTable = require('./sortable-table.js');

var CurrentAssignments = React.createClass({

	getInitialState: function() {
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
				{tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: true},
				{tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: false},
				{tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: false}
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

module.exports = CurrentAssignments;