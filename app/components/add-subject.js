var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddSubject = React.createClass({
	render: function() {

		var myData = {
			tabData: [
				{tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: false},
				{tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: true}
			],
		};

		return <div>
			<TabBar data={myData} />
			Add Subject!!!!!!!!!!!!!!!!!!!!!
		</div>
	}
});

module.exports = AddSubject;