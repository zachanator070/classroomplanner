var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar.js');
var Table = require('./table.js');

var ViewSubjects = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: true},
				{tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: false}
			],
		};

		var tableData = [[1,2,3],[7,8,9],[10,11,12],[13,14,15],[16,17,18]];
		
		return <div>
			<TabBar  data={myData} />
			<Table data={tableData} />
		</div>
	}
});

module.exports = ViewSubjects;