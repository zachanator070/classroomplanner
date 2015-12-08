var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddAssignment = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: false},
				{tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: true}
			],
		};

		return <div>
			<TabBar data={myData} />
			Add Assignment!!!!!!!!!!!!!!!!!!!!!
		</div>
	}
});

module.exports = AddAssignment;