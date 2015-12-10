var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
//var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddStudent = React.createClass({

	getInitialState: function() {
		return {name: ''}; // Clears text box
	},
	handleChange: function(event) {
		this.setState({name: event.target.value});
	},
	generatePassword: function() {
		var password = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 8; i++ ) {
			password += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return password;
	},
	createStudent: function() {
		if(this.state.name) {

			var pwd = this.generatePassword();
			api.addStudent(this.state.name, pwd, function() {
				return;
			});
			this.setState({name: ''}); // Clears text box
		}
	},

	render: function() {

		var tabs = {
			tabData: [
				{tabName: "View Students", tabLink: "#/studentmanager/viewall", active: false},
				{tabName: "Add Students", tabLink: "#/studentmanager/add", active: true}
			],
		};

		return <div>
			<TabBar data={tabs} />
			<div className="tabContent">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Create Student Account</h3>
				</div>
				<div className="panel-body">
					<form className="form-inline">
						<input className="form-control"
							type="text"
							placeholder="Student Name"
							value={this.state.name}
							onChange={this.handleChange} />
						<button className="btn btn-default"
							type="submit"
							disabled={!this.state.name}
							onClick={this.createStudent} >
							Create
						</button>
					</form>
				</div>
			</div>
		</div>
		</div>
	}
});

module.exports = AddStudent;
