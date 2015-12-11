var React = require('react');
var ReactRouter = require("react-router");

var api = require("./api.js");

var TabBar = require('./tab-bar');
var Dropdown = require('./dropdown.js');

var AddAssignment = React.createClass({

	getInitialState: function () {

		this.reloadSubjects();
		return {
			title: '',
			subject: '--Choose Subject--',
			dueDate: '',
			expDate: '',
		    	subjects: []
		};
	},
	reloadSubjects: function() {

		api.getSubjects(localStorage.name, function(success, res) {
			var subjectData = [];
			subjectData.push('--Choose Subject--');
			res.subjects.map(function(subject) {
				subjectData.push(subject.name);
			});
			this.setState({subjects: subjectData});
			return;
		}.bind(this));
	},

	handleTitleChange: function(event) {
		this.setState({title: event.target.value});
	},
	handleSubjectChange: function(selected) {
		console.log(selected);
		this.setState({subject: selected});
	},
	handleDueDateChange: function(event) {
		this.setState({dueDate: event.target.value});
	},
	handleExpDateChange: function(event) {
		this.setState({expDate: event.target.value});
	},
	createAssignment: function() {
		if(this.state.title && this.state.subject && this.state.dueDate && this.state.expDate) {
			console.log('what is it??');
			console.log(this.state.subject); //TEMP
			if(this.state.subject !== '--Choose Subject--') {
				api.addAssignment(this.state.subject, this.state.title, this.state.dueDate, this.state.expDate, function() {
					return;
				});
				console.log("Assignment \"" + this.state.title + "\" was created"); //TEMP
				this.setState({title: '', subject: '--Choose Subject--', dueDate: '', expDate: ''});
			}
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
							<label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
							<div className="col-sm-10">
								<input type="text" className="form-control"
									id="inputTitle"
									placeholder="Title"
									value={this.state.title}
									onChange={this.handleTitleChange} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputSubject" className="col-sm-2 control-label">Subject</label>
							<div className="col-sm-10">
								<Dropdown title={this.state.subject}
									items={this.state.subjects}
									itemSelected={this.handleSubjectChange} />
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
									disabled={!this.state.title || !this.state.subject || !this.state.dueDate || !this.state.expDate || (this.state.subject == '--Choose Subject--')}
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
