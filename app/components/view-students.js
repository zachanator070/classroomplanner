var React = require('react');
var ReactRouter = require("react-router");

var TabBar = require('./tab-bar');
var SortableTable = require('./sortable-table.js');

var ViewStudents = React.createClass({

	getInitialState: function () {
		return {
		    	data: [
		        	{ name: "Billy Bob", password: "xz8c7v3z64c" },
		        	{ name: "Tina Turner", password: "f2ghqj3fd47s" },
		        	{ name: "Ken Doll", password: "98x7c6v7bs9d" },
		        	{ name: "Mary Joseph", password: "kjabh2hjb3112" }
		    	]
		};
	},

	removeStudent: function(index) {
		// < -- insert api call here!!
		console.log("Removing student: " + this.state.data[index].name); //TEMP
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