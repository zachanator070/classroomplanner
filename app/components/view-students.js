var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
//var auth = require("./auth.js");

var TabBar = require('./tab-bar');
var SortableTable = require('./sortable-table.js');

var ViewStudents = React.createClass({

	getInitialState: function () {

		this.reloadStudents();
		return {
		    	data: []
		};
	},

	reloadStudents: function() {
		api.getStudents("instructor", function(success, res) {

			var studData = res.users.map(function(student) {
				return { name: student.name, password: student.password };
			});
			this.setState({data: studData});
			return;
		}.bind(this));
	},

	removeStudent: function(student) {

		api.deleteStudent(student.name, this.reloadStudents);

		console.log("Removing student: " + student.name); //TEMP
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Students", tabLink: "#/studentmanager/viewall", active: true},
				{tabName: "Add Students", tabLink: "#/studentmanager/add", active: false}
			],
		};

		var columns = [
	            { header: "Name", key: "name"},
	            { header: "Password", key: "password" }, 
	            {} //Delete Button Column
        	];

		return <div>
			<TabBar  data={tabs} />
			<SortableTable data={this.state.data} columns={columns} removeRow={this.removeStudent} />
		</div>
	}
});

module.exports = ViewStudents;