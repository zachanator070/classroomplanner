var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddAssignment = React.createClass({

	getInitialState: function() {
		return {value: ''};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	createAssignment: function() {
		if(this.state.value) {
			// <--- api function call goes here!!!
			console.log("Assignment \"" + this.state.value + "\" was created"); //TEMP
			this.setState({value: ''});
		}
	},
	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: false},
				{tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: true}
			],
		};

		return <div>
			<TabBar data={tabs} />
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Create New Assignment</h3>
				</div>
				<div className="panel-body">
					<form className="form-inline">
						<input className="form-control" 
							type="text"
							placeholder="Assignment Name"
							value={this.state.value}
							onChange={this.handleChange} />
						<button className="btn btn-default"
							type="submit"
							disabled={!this.state.value} 
							onClick={this.createAssignment} >
							Create
						</button>
					</form>
				</div>
			</div>
		</div>
	}
});

module.exports = AddAssignment;