var React = require("react");
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require("./app.js");
var Home = require("./home.js");
var List = require("./list.js");
var Login = require("./login.js");
var Register = require("./register.js");

var ViewStudents = require('./view-students.js');
var AddStudent = require('./add-student.js');
var ViewSubjects = require('./view-subjects.js');
var AddSubject = require('./add-subject.js');
var ViewAssignments = require('./view-assignments.js');
var AddAssignment = require('./add-assignment.js');
var CurrentAssignments = require('./current-assignments.js');
var LateAssignments = require('./late-assignments.js');
var ExpiredAssignments = require('./expired-assignments.js');

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../css/app.css");

var routes = (
  <Router>
    <Route name="app" path="/" component ={App}>
      <IndexRoute component = {Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      // Our code below
      <Route path="/studentmanager/viewall" component={ViewStudents} />
      <Route path="/studentmanager/add" component={AddStudent} />

      <Route path="/subjectmanager/viewall" component={ViewSubjects} />
      <Route path="/subjectmanager/add" component={AddSubject} />

      <Route path="/assignmentmanager/viewall" component={ViewAssignments} />
      <Route path="/assignmentmanager/add" component={AddAssignment} />

      <Route path="/studentassignments/current" component={CurrentAssignments} />
      <Route path="/studentassignments/late" component={LateAssignments} />
      <Route path="/studentassignments/expired" component={ExpiredAssignments} />

    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('content'));
