var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Table = require('./table.js');

var ExpiredAssignments = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: false},
				{tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: false},
				{tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: true}
			],
		};

		var tableData = [[7,8,9],[10,11,12],[13,14,15],[16,17,18]];

		return <div>
			<TabBar data={myData} />
			<Table data={tableData} />
		</div>
	}
});

module.exports = ExpiredAssignments;