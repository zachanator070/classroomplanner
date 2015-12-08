var React = require("react");
var ReactRouter = require("react-router");

var TabBar = require('./tab-bar.js');
var Dropdown = require('./dropdown.js');
var SortableTable = require('./sortable-table.js');

// SORTING FUNCTIONS CAN BE PLACED HERE - SEE CODE BELOW COMPONENT

var ViewAssignments = React.createClass({
    
    getInitialState: function () {
        return {
                data: [
                    { id: 3, name: "Billy Bob", class: "B" },
                    { id: 1, name: "Tina Turner", class: "A" },
                    { id: 2, name: "Ken Doll", class: "A" },
                    { id: 4, name: "Mary Joseph", class: "C" }
                ]
        };
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
            { header: "ID", key: "id"},
            { header: "NAME", key: "name" }, 
            { header: "CLASS", key: "class"}
        ];

        var dropdownData = {
            title: 'Choose subject', //What should show up on the button to open/close the dropdown
            items: [ // List of items to show in the dropdown
                'Math 7',
                'English 8',
                'Spanish 7'
            ]
        };

        return (
            <div>
                <TabBar  data={tabs} />
                <Dropdown title={dropdownData.title} items={dropdownData.items}/>
                <SortableTable data={this.state.data} columns={columns} />
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