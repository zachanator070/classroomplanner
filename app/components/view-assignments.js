var React = require("react");
var ReactRouter = require("react-router");

var api = require("./api.js");

var TabBar = require('./tab-bar.js');
var SortableTable = require('./sortable-table.js');

// SORTING FUNCTIONS CAN BE PLACED HERE - SEE CODE BELOW COMPONENT

var ViewAssignments = React.createClass({

    getInitialState: function () {
        // var assignments will be replaced with api call
        var assignments =  [
                    { name: "Read pg 18, ex 1-10", subject: "English 7" , dueDate: "11/12/15"},
                    { name: "Read pg 4, ex 20-36", subject: "Math 7" , dueDate: "12/1/15"},
                    { name: "Read pg 75, ex 1-4", subject: "Reading 7" , dueDate: "12/8/15"},
                    { name: "Read pg 13, ex 2-6", subject: "English 7" , dueDate: "12/5/15"},
                ];
        return {
                data: assignments,
        };
    },
    removeAssignment: function(item) {
        // < -- insert api call here!!
        console.log("Removing assignment: " + item.name); //TEMP
    },

    render: function () {

        // OPTIONS CAN BE PLACED HERE - SEE EXAMPLE CODE BELOW COMPONENT

        var tabs = {
            tabData: [
                {tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: true},
                {tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: false}
            ],
        };

        var columns = [
            { header: "Name", key: "name"},
            { header: "Subject", key: "subject"},
            { header: "Due Date", key: "dueDate"},
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

// RENDER OPTIONS
       // var columns = [
        //     { header: "ID", key: "id", defaultSorting: "ASC", headerStyle: {fontSize: "15px", backgroundColor: "#FFDAB9", width: "100px" }, dataStyle: {fontSize: "15px", backgroundColor: "#FFDAB9"} },
        //     { header: "NAME", key: "name", headerStyle: {fontSize: "15px"}, descSortFunction: FamilyNameSorter.desc, ascSortFunction: FamilyNameSorter.asc },
        //     { header: "CLASS", key: "class", headerStyle: {fontSize: "15px"}, sortable: false }
        // ];
        // var style = {
        //     backgroundColor: "#eee"
        // };

        // var iconStyle = {
        //     color: "#aaa",
        //     paddingLeft: "5px",
        //     paddingRight: "5px"
        // };
        // return (
        //     <div>
        //         <TabBar  data={tabs} />
        //         <SortableTable data={this.state.data} columns={columns} style={style} iconStyle={iconStyle} />
        //     </div>
        // );

// SORTING FUNCTIONS

// var getFamilyName = function (name) {
//     return name.split(" ").slice(-1)[0]
// };

// var FamilyNameSorter = {
//     desc: function (data, key) {
//         var result = data.sort(function (_a, _b) {
//             var a = getFamilyName(_a[key]);
//             var b = getFamilyName(_b[key]);
//             if ( a <= b ) {
//                 return 1;
//             } else if ( a > b) {
//                 return -1;
//             }
//         });
//             return result;
//     },

//     asc: function (data, key) {
//         return data.sort(function (_a, _b) {
//             var a = getFamilyName(_a[key]);
//             var b = getFamilyName(_b[key]);
//             if ( a >= b ) {
//                 return 1;
//             } else if ( a < b) {
//                 return -1;
//             }
//         })
//     }
// };
