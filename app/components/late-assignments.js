var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Table = require('./table.js');

var LateAssignments = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: false},
				{tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: true},
				{tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: false}
			],
		};

		var tableData = [[1,2,3],[7,8,9],[10,11,12],[13,14,15]];

		return <div>
			<TabBar data={myData} />
			<Table data={tableData} />
		</div>
	}
});

module.exports = LateAssignments;