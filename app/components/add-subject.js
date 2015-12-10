var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddSubject = React.createClass({

	getInitialState: function() {
		return {name: ''};
	},
	handleChange: function(event) {
		this.setState({name: event.target.value});
	},
	createSubject: function() {
		if(this.state.name) {

			api.addSubject(this.state.name, localStorage.name, function() {
				return;
			});
			console.log("Subject \"" + this.state.name + "\" was created"); //TEMP
			this.setState({name: ''});
		}
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: false},
				{tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: true}
			],
		};

		return <div>
			<TabBar data={tabs} />
			<div className="tabContent">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Create New Subject</h3>
				</div>
				<div className="panel-body">
					<form className="form-inline">
						<input className="form-control"
							type="text"
							placeholder="Subject Name"
							value={this.state.name}
							onChange={this.handleChange} />
						<button className="btn btn-default"
							type="submit"
							disabled={!this.state.name} 
							onClick={this.createSubject} >
							Create
						</button>
					</form>
				</div>
			</div>
			</div>
		</div>
	}
});

module.exports = AddSubject;
