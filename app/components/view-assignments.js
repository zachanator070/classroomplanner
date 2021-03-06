var React = require("react");
var ReactRouter = require("react-router");

var api = require("./api.js");

var TabBar = require('./tab-bar.js');
var SortableTable = require('./sortable-table.js');

var ViewAssignments = React.createClass({

    getInitialState: function () {


        this.reloadAssignments();
        return {
                data: []
        };
    },
    reloadAssignments: function() {

        api.getAssignments(function(success, res) {

            var assignmentData = res.assignments.map(function(assignment) {

                var dueDateStrings = assignment.dueDate.split("-");
                var formatedDueDate = dueDateStrings[0]+"-"+dueDateStrings[1]+"-"+dueDateStrings[2].split("T")[0]; // year-month-day
                var expDateStrings = assignment.expDate.split("-");
                var formatedExpDate = expDateStrings[0]+"-"+expDateStrings[1]+"-"+expDateStrings[2].split("T")[0]; // year-month-day

                return { title: assignment.title, subject: assignment.subject, dueDate: formatedDueDate, expDate: formatedExpDate };
            });
            this.setState({data: assignmentData});
            return;
        }.bind(this));

    },

    removeAssignment: function(assignment) {

        api.deleteAssignment(assignment, this.reloadAssignments);

        console.log("Removing assignment: " + assignment.title); //TEMP
    },

    render: function () {

        var tabs = {
            tabData: [
                {tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: true},
                {tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: false}
            ],
        };

        var columns = [
            { header: "Title", key: "title"},
            { header: "Subject", key: "subject"},
            { header: "Due Date", key: "dueDate"},
            { header: "Expiration Date", key: "expDate"},
            { header: 'Delete', key: "xButton"} //Delete Button Column
        ];

        return (
            <div>
                <TabBar  data={tabs} />
                <div className="tabContent">
                  <SortableTable data={this.state.data} columns={columns} removeRow={this.removeAssignment} deleteCol='true' />
                </div>
            </div>
        );
    }
});

module.exports = ViewAssignments;