var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var Table = require('./table.js');

var ViewStudents = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "View Students", tabLink: "#/studentmanager/viewall", active: true},
				{tabName: "Add Students", tabLink: "#/studentmanager/add", active: false}
			],
		};

		var tableData = [[1,2,3],[4,5,6],[7,8,9],[13,14,15],[16,17,18]];

		return <div>
			<TabBar  data={myData} />
			<Table data={tableData} />
		</div>
	}
});

module.exports = ViewStudents;