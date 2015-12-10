var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");
var auth = require("./auth.js");

var TabBar = require('./tab-bar');

var AddAssignment = React.createClass({

	getInitialState: function() {
		return {name: '', subject: '', dueDate: '', expDate: ''};
	},
	handleNameChange: function(event) {
		this.setState({name: event.target.value});
	},
	handleSubjectChange: function(event) {
		this.setState({subject: event.target.value});
	},
	handleDueDateChange: function(event) {
		this.setState({dueDate: event.target.value});
	},
	handleExpDateChange: function(event) {
		this.setState({expDate: event.target.value});
	},
	createAssignment: function() {
		if(this.state.name && this.state.subject && this.state.dueDate && this.state.expDate) {
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
			<div className="tabContent">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Create New Assignment</h3>
				</div>
				<div className="panel-body">
					<form className="form-horizontal">
						<div className="form-group">
							<label htmlFor="inputTitle" className="col-sm-2 control-label">Name</label>
							<div className="col-sm-10">
								<input type="text" className="form-control"
									id="inputTitle"
									placeholder="Name"
									value={this.state.name}
									onChange={this.handleNameChange} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputSubject" className="col-sm-2 control-label">Subject</label>
							<div className="col-sm-10">
								<input type="text" className="form-control"
									id="inputSubject"
									placeholder="Subject"
									value={this.state.subject}
									onChange={this.handleSubjectChange} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputDueDate" className="col-sm-2 control-label">Due Date</label>
							<div className="col-sm-10">
								<input type="date" className="form-control"
									id="inputDueDate"
									value={this.state.dueDate}
									onChange={this.handleDueDateChange} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputExpDate" className="col-sm-2 control-label">Expiration Date</label>
							<div className="col-sm-10">
								<input type="date" className="form-control"
									id="inputExpDate"
									value={this.state.expDate}
									onChange={this.handleExpDateChange} />
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-offset-2 col-sm-10">
								<button className="btn btn-default"
									type="submit"
									disabled={!this.state.name || !this.state.subject || !this.state.dueDate || !this.state.expDate}
									onClick={this.createAssignment} >
									Create
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		</div>
	}
});

module.exports = AddAssignment;
