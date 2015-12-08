var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddStudent = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "View Students", tabLink: "#/studentmanager/viewall", active: false},
				{tabName: "Add Students", tabLink: "#/studentmanager/add", active: true}
			],
		};

		return <div>
			<TabBar data={myData} />
			Add Student!!!!!!!!!!!!!!!!!!!!!
		</div>
	}
});

module.exports = AddStudent;