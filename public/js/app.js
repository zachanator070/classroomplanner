webpackJsonp([1],{

/***/ 0:
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 158);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	
	var App = __webpack_require__(/*! ./app.js */ 208);
	var Home = __webpack_require__(/*! ./home.js */ 211);
	var List = __webpack_require__(/*! ./list.js */ 212);
	var Login = __webpack_require__(/*! ./login.js */ 218);
	var Register = __webpack_require__(/*! ./register.js */ 219);
	
	var ViewStudents = __webpack_require__(/*! ./view-students.js */ 220);
	var AddStudent = __webpack_require__(/*! ./add-student.js */ 226);
	var ViewSubjects = __webpack_require__(/*! ./view-subjects.js */ 227);
	var AddSubject = __webpack_require__(/*! ./add-subject.js */ 228);
	var ViewAssignments = __webpack_require__(/*! ./view-assignments.js */ 229);
	var AddAssignment = __webpack_require__(/*! ./add-assignment.js */ 230);
	var CurrentAssignments = __webpack_require__(/*! ./current-assignments.js */ 231);
	var LateAssignments = __webpack_require__(/*! ./late-assignments.js */ 234);
	var ExpiredAssignments = __webpack_require__(/*! ./expired-assignments.js */ 235);
	
	__webpack_require__(/*! ../../~/bootstrap/dist/css/bootstrap.min.css */ 236);
	__webpack_require__(/*! ../css/app.css */ 245);
	
	var routes = React.createElement(
	  Router,
	  null,
	  React.createElement(
	    Route,
	    { name: "app", path: "/", component: App },
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { path: "/login", component: Login }),
	    React.createElement(Route, { path: "/register", component: Register }),
	    "// Our code below",
	    React.createElement(Route, { path: "/studentmanager/viewall", component: ViewStudents }),
	    React.createElement(Route, { path: "/studentmanager/add", component: AddStudent }),
	    React.createElement(Route, { path: "/subjectmanager/viewall", component: ViewSubjects }),
	    React.createElement(Route, { path: "/subjectmanager/add", component: AddSubject }),
	    React.createElement(Route, { path: "/assignmentmanager/viewall", component: ViewAssignments }),
	    React.createElement(Route, { path: "/assignmentmanager/add", component: AddAssignment }),
	    React.createElement(Route, { path: "/studentassignments/current", component: CurrentAssignments }),
	    React.createElement(Route, { path: "/studentassignments/late", component: LateAssignments }),
	    React.createElement(Route, { path: "/studentassignments/expired", component: ExpiredAssignments })
	  )
	);
	
	ReactDOM.render(routes, document.getElementById('content'));

/***/ },

/***/ 158:
/*!*******************************!*\
  !*** ../~/react-dom/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! react/lib/ReactDOM */ 3);


/***/ },

/***/ 208:
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// Top-level component for the app
	var App = React.createClass({
	  displayName: "App",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // the user is logged in
	      loggedIn: auth.loggedIn(),
	      type: auth.getType()
	    };
	  },
	
	  // callback when user is logged in
	  setStateOnAuth: function (loggedIn, type) {
	    this.setState({ loggedIn: loggedIn, type: type });
	  },
	
	  // when the component loads, setup the callback
	  componentWillMount: function () {
	    auth.onChange = this.setStateOnAuth;
	  },
	
	  // logout the user and redirect to home page
	  logout: function (event) {
	    auth.logout();
	    this.history.pushState(null, '/');
	  },
	
	  // show the navigation bar
	  // the route handler replaces the RouteHandler element with the current page
	  render: function () {
	
	    var links;
	
	    if (this.state.loggedIn) {
	      if (this.state.type === "instructor") {
	        links = React.createElement(
	          "ul",
	          { className: "nav navbar-nav" },
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#/subjectmanager/viewall" },
	              "Subject Manager"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#/assignmentmanager/viewall" },
	              "Assignment Manager"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#/studentmanager/viewall" },
	              "Student Manager"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#/studentassignments/late" },
	              "Student Assignments"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#", onClick: this.logout },
	              "Logout"
	            )
	          )
	        );
	      } else if (this.state.type === "student") {
	        links = React.createElement(
	          "ul",
	          { className: "nav navbar-nav" },
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "/" },
	              "A link for a student"
	            )
	          )
	        );
	      }
	    } else {
	      links = React.createElement("div", null);
	    }
	
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "nav",
	        { className: "navbar navbar-default", role: "navigation" },
	        React.createElement(
	          "div",
	          { className: "container" },
	          React.createElement(
	            "div",
	            { className: "col-md-1" },
	            React.createElement(
	              "a",
	              { href: "/" },
	              React.createElement("img", { className: "logo", src: "../logo.png" })
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "col-md-6" },
	            React.createElement(
	              "h1",
	              { className: "navbar-brand" },
	              "Classroom Planner"
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
	            links
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "container" },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = App;

/***/ },

/***/ 209:
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! jquery */ 210);
	
	// authentication object
	var auth = {
	  //register: function(name, username, password, cb) {
	  register: function (name, password, cb) {
	    console.log('Inside register in auth.js [ name: ' + name + " password: " + password + " ]"); //TEMP
	    // submit request to server, call the callback when complete
	    var url = "/api/users/register";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        name: name,
	        password: password
	      },
	      // on success, store a login token
	      success: (function (res) {
	        localStorage.token = res.token;
	        localStorage.name = res.name;
	
	        this.onChange(true, res.type);
	        localStorage.type = res.type;
	        if (cb) cb(true);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.name;
	        delete localStorage.type;
	        delete localStorage.token;
	        this.onChange(false, null);
	
	        if (cb) cb(false);
	      }).bind(this)
	    });
	  },
	  // login the user
	  login: function (name, password, cb) {
	
	    console.log("called login");
	
	    // submit login request to server, call callback when complete
	    cb = arguments[arguments.length - 1];
	    // check if token in local storage
	    // if (localStorage.token) {
	    //   this.onChange(true);
	    //
	    //   if (cb)
	    //     cb(true,localStorage.type);
	    //   return;
	    // }
	
	    // submit request to server
	    var url = "/api/users/login";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        name: name,
	        password: password
	      },
	      success: (function (res) {
	        // on success, store a login token
	        localStorage.token = res.token;
	        localStorage.name = res.name;
	        localStorage.type = res.type;
	
	        this.onChange(true, res.type);
	        if (cb) cb(true, res.type);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false, null);
	        if (cb) cb(false, null);
	      }).bind(this)
	    });
	  },
	  // get the token from local storage
	  getToken: function () {
	    return localStorage.token;
	  },
	  // get the name from local storage
	  getName: function () {
	    return localStorage.name;
	  },
	  //get the users type from local storage
	  getType: function () {
	    return localStorage.type;
	  },
	  // logout the user, call the callback when complete
	  logout: function (cb) {
	    delete localStorage.token;
	    delete localStorage.type;
	    this.onChange(false, null);
	    if (cb) cb();
	  },
	  // check if user is logged in
	  loggedIn: function () {
	    return !!localStorage.token;
	  },
	  // default onChange function
	  onChange: function () {}
	};
	
	module.exports = auth;

/***/ },

/***/ 211:
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Link = ReactRouter.Link;
	
	// Home page, which shows Login and Register buttons
	var Home = React.createClass({
	  displayName: "Home",
	
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "content" },
	      React.createElement(
	        "div",
	        { className: "greeting" },
	        React.createElement(
	          "h1",
	          null,
	          "Welcome to the Classroom Planner"
	        ),
	        React.createElement(
	          "p",
	          null,
	          "Your interactive planner for all your classroom needs!",
	          React.createElement("br", null),
	          "New instructor? Create an account!"
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            Link,
	            { className: "btn btn-default btn-primary", to: "login" },
	            "Login"
	          ),
	          "     ",
	          React.createElement(
	            Link,
	            { className: "btn btn-default btn-primary", to: "register" },
	            "Register"
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports = Home;

/***/ },

/***/ 212:
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var ListHeader = __webpack_require__(/*! ./listheader.js */ 213);
	var ListEntry = __webpack_require__(/*! ./listentry.js */ 215);
	var ListItems = __webpack_require__(/*! ./listitems.js */ 216);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// List page, shows the todo list of items
	var List = React.createClass({
	  displayName: "List",
	
	  // context so the component can access the router
	  contextTypes: {
	    location: React.PropTypes.object
	  },
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // list of items in the todo list
	      items: []
	    };
	  },
	
	  // when the component loads, get the list items
	  componentDidMount: function () {
	    api.getItems(this.listSet);
	  },
	
	  // reload the list of items
	  reload: function () {
	    api.getItems(this.listSet);
	  },
	
	  // callback for getting the list of items, sets the list state
	  listSet: function (status, data) {
	    if (status) {
	      // set the state for the list of items
	      this.setState({
	        items: data.items
	      });
	    } else {
	      // if the API call fails, redirect to the login page
	      this.context.router.transitionTo('/login');
	    }
	  },
	
	  // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
	  render: function () {
	    var name = auth.getName();
	    return React.createElement(
	      "section",
	      { id: "todoapp" },
	      React.createElement(ListHeader, { name: name, items: this.state.items, reload: this.reload }),
	      React.createElement(
	        "section",
	        { id: "main" },
	        React.createElement(ListEntry, { reload: this.reload }),
	        React.createElement(ListItems, { items: this.state.items, reload: this.reload })
	      )
	    );
	  }
	});
	
	module.exports = List;

/***/ },

/***/ 213:
/*!**********************************!*\
  !*** ./components/listheader.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	
	// List header, which shows who the list is for, the number of items in the list, and a button to clear completed items
	var ListHeader = React.createClass({
	  displayName: "ListHeader",
	
	  // handle the clear completed button submit   
	  clearCompleted: function (event) {
	    // loop through the items, and delete any that are complete
	    this.props.items.forEach(function (item) {
	      if (item.completed) {
	        api.deleteItem(item, null);
	      }
	    });
	    // XXX race condition because the API call to delete is async
	    // reload the list
	    this.props.reload();
	  },
	
	  // render the list header
	  render: function () {
	    // true if there are any completed items
	    var completed = this.props.items.filter(function (item) {
	      return item.completed;
	    });
	    return React.createElement(
	      "header",
	      { id: "header" },
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "col-md-6" },
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              "i",
	              null,
	              "Lovingly created for ",
	              this.props.name
	            )
	          ),
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              "span",
	              { id: "list-count", className: "label label-default" },
	              React.createElement(
	                "strong",
	                null,
	                this.props.items.length
	              ),
	              " item(s)"
	            )
	          ),
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              "i",
	              null,
	              "Double-click to edit an item"
	            )
	          )
	        ),
	        completed.length > 0 ? React.createElement(
	          "div",
	          { className: "col-md-6 right" },
	          React.createElement(
	            "button",
	            { className: "btn btn-warning btn-md", id: "clear-completed", onClick: this.clearCompleted },
	            "Clear completed (",
	            completed.length,
	            ")"
	          )
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = ListHeader;

/***/ },

/***/ 214:
/*!***************************!*\
  !*** ./components/api.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! jquery */ 210);
	// API object
	var api = {
	
	  //
	  //student functions
	  //
	
	  // get the list of all students by subject, call the callback when complete
	  getStudents: function (subject, cb) {
	    var url = "/api/users/" + subject;
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // adds a student for a particular instructor
	  addStudents: function (studentName, password, cb) {
	    var url = "/api/users/" + studentName;
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      headers: { 'Authorization': localStorage.token },
	      data: {
	        name: studentName,
	        password: password
	      },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  //
	  //assignment functions
	  //
	
	  // get the list of assignments by subject, call the callback when complete
	  getAssignments: function (subject, cb) {
	    var url = "/api/assignments";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      headers: { 'Authorization': localStorage.token, 'Subject': subject },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // add an assignment for a subject, call the callback when complete
	  addAssignment: function (subject, title, dueDate, expirationDate, cb) {
	    var url = "/api/assignments";
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        assignment: {
	          'subject': subject,
	          'title': title,
	          'dueDate': dueDate,
	          'expirationDate': expirationDate
	        }
	      }),
	      type: 'POST',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // update an assignment, call the callback when complete
	  updateAssignment: function (assignment, cb) {
	    var url = "/api/assignments/" + assignment._id;
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        assignment: {
	          title: assignment.title,
	          subject: assignment.subject,
	          dueDate: assignment.dueDate,
	          expirationDate: assignment.expirationDate
	        }
	      }),
	      type: 'PUT',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is any error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // delete an assignment, call the callback when complete
	  deleteAssignment: function (assignment, cb) {
	    var url = "/api/assignments/" + assignment._id;
	    $.ajax({
	      url: url,
	      type: 'DELETE',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  //
	  //student assigment functions
	  //
	
	  // get the list of assignmentss by student name, call the callback when complete
	  getStudentAssignments: function (name, cb) {
	    var url = "/api/studentAssignments";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      headers: { 'Authorization': localStorage.token, 'Name': name },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // add an assignment for a student, call the callback when complete
	  addStudentAssignment: function (assignmentName, completed, timeSubmitted, student, cb) {
	    var url = "/api/studentAssignments";
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        assignment: {
	          'assignmentName': assignmentName,
	          'completed': completed,
	          'timeSubmitted': timeSubmitted,
	          'student': student
	        }
	      }),
	      type: 'POST',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // update a student's assignment, call the callback when complete
	  updateStudentAssignment: function (assignment, cb) {
	    var url = "/api/assignments/" + assignment._id;
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        assignment: {
	          assignmentName: assignment.assignmentName,
	          completed: assignment.completed,
	          timeSubmitted: assignment.timeSubmitted,
	          student: assignment.student
	        }
	      }),
	      type: 'PUT',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is any error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // delete a student's assignment, call the callback when complete
	  deleteStudentAssignment: function (assignment, cb) {
	    var url = "/api/assignments/" + assignment._id;
	    $.ajax({
	      url: url,
	      type: 'DELETE',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  //
	  // subject functions
	  //
	
	  // get the list of subjects by instructor, call the callback when complete
	  getSubjects: function (name, cb) {
	    var url = "/api/subjects";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      headers: { 'Authorization': localStorage.token, 'Instructor': instructor },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // add a subject for an instructor, call the callback when complete
	  addSubject: function (name, instructor, cb) {
	    var url = "/api/subjects";
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        subject: {
	          'name': name,
	          'instructor': instructor
	        }
	      }),
	      type: 'POST',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	
	  // delete a subject, call the callback when complete
	  deleteSubject: function (subject, cb) {
	    var url = "/api/subjects/" + subject._id;
	    $.ajax({
	      url: url,
	      type: 'DELETE',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  }
	
	};
	
	module.exports = api;

/***/ },

/***/ 215:
/*!*********************************!*\
  !*** ./components/listentry.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	
	// List entry component, handles adding new items to the list
	var ListEntry = React.createClass({
	  displayName: "ListEntry",
	
	  // handles submit event for adding a new item
	  addItem: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var title = this.refs.title.value;
	    if (!title) {
	      return;
	    }
	    // call API to add item, and reload once added
	    api.addItem(title, this.props.reload);
	    this.refs.title.value = '';
	  },
	
	  // render the item entry area
	  render: function () {
	    return React.createElement(
	      "header",
	      { id: "input" },
	      React.createElement(
	        "form",
	        { id: "item-form", name: "itemForm", onSubmit: this.addItem },
	        React.createElement("input", { type: "text", id: "new-item", ref: "title", placeholder: "Enter a new item", autoFocus: true })
	      )
	    );
	  }
	});
	
	module.exports = ListEntry;

/***/ },

/***/ 216:
/*!*********************************!*\
  !*** ./components/listitems.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Item = __webpack_require__(/*! ./item.js */ 217);
	
	// List items component, shows the list of items
	var ListItems = React.createClass({
	  displayName: "ListItems",
	
	  // context so the component can access the router
	  contextTypes: {
	    location: React.PropTypes.object
	  },
	  // render the list of items
	  render: function () {
	    // get list of items to show, using the path to the current page
	    var shown = this.props.items.filter(function (item) {
	      switch (this.context.location.pathname) {
	        case '/list/active':
	          return !item.completed;
	        case '/list/completed':
	          return item.completed;
	        default:
	          return true;
	      }
	    }, this);
	
	    // using the list of items, generate an Item element for each one
	    var list = shown.map((function (item) {
	      return React.createElement(Item, { key: item.id, item: item, reload: this.props.reload });
	    }).bind(this));
	
	    // render the list
	    return React.createElement(
	      "ul",
	      { id: "todo-list" },
	      list
	    );
	  }
	});
	
	module.exports = ListItems;

/***/ },

/***/ 217:
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	
	// Item shown in the todo list
	var Item = React.createClass({
	  displayName: "Item",
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // editing this item
	      editing: false,
	      // text saved before editing started
	      editText: this.props.item.title
	    };
	  },
	  // set the focus and selection range when this item is updated
	  componentDidUpdate: function (prevProps, prevState) {
	    if (!prevState.editing && this.state.editing) {
	      var node = this.refs.editField.getDOMNode();
	      node.focus();
	      node.setSelectionRange(0, node.value.length);
	    }
	  },
	  // when the item is completed, toggle its state and update it
	  toggleCompleted: function () {
	    this.props.item.completed = !this.props.item.completed;
	    api.updateItem(this.props.item, this.props.reload);
	  },
	  // called when the delete button is clicked for this item
	  deleteItem: function () {
	    api.deleteItem(this.props.item, this.props.reload);
	  },
	  // called when the item is double-clicked
	  editItem: function () {
	    this.setState({ editing: true, editText: this.props.item.title });
	  },
	  // called when the item is changed
	  changeItem: function (event) {
	    this.setState({ editText: event.target.value });
	  },
	  // called when the enter key is entered after the item is edited
	  saveItem: function (event) {
	    if (!this.state.editing) {
	      return;
	    }
	    var val = this.state.editText.trim();
	    if (val) {
	      this.setState({ editing: false, editText: val });
	      this.props.item.title = this.state.editText;
	      // save the item
	      api.updateItem(this.props.item, this.props.reload);
	    } else {
	      // delete the item if there is no text left any more
	      api.deleteItem(this.props.item, this.props.reload);
	    }
	  },
	  // called when a key is pressed
	  handleKeyDown: function (event) {
	    var ESCAPE_KEY = 27;
	    var ENTER_KEY = 13;
	    // if the ESC key is pressed, then cancel editing
	    // if the ENTER key is pressed, then save edited text
	    if (event.which === ESCAPE_KEY) {
	      this.setState({ editing: false, editText: this.props.item.title });
	    } else if (event.which === ENTER_KEY) {
	      this.saveItem(event);
	    }
	  },
	  // render the Item
	  render: function () {
	    // construct a list of classes for the item CSS
	    var classes = "";
	    if (this.props.item.completed) {
	      classes += 'completed';
	    }
	    if (this.state.editing) {
	      classes += ' editing';
	    }
	    return React.createElement(
	      "li",
	      { className: classes },
	      React.createElement(
	        "div",
	        { className: "view" },
	        React.createElement("input", { id: this.props.item.id, className: "toggle", type: "checkbox", onChange: this.toggleCompleted.bind(this, this.props.item), checked: this.props.item.completed }),
	        React.createElement("label", { className: "check", htmlFor: this.props.item.id }),
	        React.createElement(
	          "label",
	          { onDoubleClick: this.editItem },
	          this.props.item.title
	        ),
	        React.createElement("button", { className: "destroy", onClick: this.deleteItem })
	      ),
	      React.createElement("input", { ref: "editField", className: "edit", onKeyDown: this.handleKeyDown, onChange: this.changeItem, onSubmit: this.saveItem, onBlur: this.saveItem, value: this.state.editText })
	    );
	  }
	});
	
	module.exports = Item;

/***/ },

/***/ 218:
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// Login page, shows the login form and redirects to the list if login is successful
	var Login = React.createClass({
	  displayName: "Login",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // there was an error on logging in
	      error: false
	    };
	  },
	
	  // handle login button submit
	  login: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var name = this.refs.name.value;
	    var password = this.refs.password.value;
	    if (!name || !password) {
	      return;
	    }
	
	    // login via API
	    auth.login(name, password, (function (loggedIn) {
	      // login callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	
	      console.log("Type of user:" + auth.getType());
	
	      if (auth.getType() == "instructor") {
	        this.history.pushState(null, '/studentassignments/late');
	      } else {}
	    }).bind(this));
	  },
	
	  // show the login form
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "content" },
	      React.createElement(
	        "h2",
	        null,
	        "Login"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.login },
	        React.createElement("input", { type: "text", className: "shortInput form-control", placeholder: "Name", ref: "name", autoFocus: true }),
	        React.createElement("br", null),
	        React.createElement("input", { type: "password", className: "shortInput form-control", placeholder: "Password", ref: "password" }),
	        React.createElement("br", null),
	        React.createElement("input", { className: "btn btn-primary btn-padding", type: "submit", value: "Login" }),
	        React.createElement("br", null),
	        this.state.error ? React.createElement(
	          "div",
	          { className: "alert" },
	          "Invalid username or password."
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = Login;

/***/ },

/***/ 219:
/*!********************************!*\
  !*** ./components/register.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// Register page, shows the registration form and redirects to the list if login is successful
	var Register = React.createClass({
	  displayName: "Register",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // there was an error registering
	      error: false
	    };
	  },
	
	  // handle regiser button submit
	  register: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var name = this.refs.name.value;
	    var password = this.refs.password.value;
	    if (!name || !password) {
	      return;
	    }
	    // register via the API
	    auth.register(name, password, (function (loggedIn) {
	      // register callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	      this.history.pushState(null, '/studentassignments/late');
	    }).bind(this));
	  },
	
	  // show the registration form
	  render: function () {
	
	    return React.createElement(
	      "div",
	      { className: "content" },
	      React.createElement(
	        "h2",
	        null,
	        "Register"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.register },
	        React.createElement("input", { type: "text", className: "shortInput form-control", placeholder: "Name", ref: "name", autoFocus: true }),
	        React.createElement("br", null),
	        React.createElement("input", { type: "password", className: "shortInput form-control", placeholder: "Password", ref: "password" }),
	        React.createElement("br", null),
	        React.createElement("input", { className: "btn btn-primary btn-padding", type: "submit", value: "Register" }),
	        React.createElement("br", null),
	        this.state.error ? React.createElement(
	          "div",
	          { className: "alert" },
	          "Invalid username or password."
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = Register;

/***/ },

/***/ 220:
/*!*************************************!*\
  !*** ./components/view-students.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	var SortableTable = __webpack_require__(/*! ./sortable-table.js */ 222);
	
	var ViewStudents = React.createClass({
		displayName: 'ViewStudents',
	
		getInitialState: function () {
			return {
				data: [{ name: "Billy Bob", password: "xz8c7v3z64c" }, { name: "Tina Turner", password: "f2ghqj3fd47s" }, { name: "Ken Doll", password: "98x7c6v7bs9d" }, { name: "Mary Joseph", password: "kjabh2hjb3112" }]
			};
		},
	
		removeStudent: function (item) {
			// < -- insert api call here!!
			console.log("Removing student: " + item.name); //TEMP
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "View Students", tabLink: "#/studentmanager/viewall", active: true }, { tabName: "Add Students", tabLink: "#/studentmanager/add", active: false }]
			};
	
			var columns = [{ header: "Name", key: "name" }, { header: "Password", key: "password" }, {} //Delete Button Column
			];
	
			return React.createElement(
				'div',
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(SortableTable, { data: this.state.data, columns: columns, removeRow: this.removeStudent })
			);
		}
	});
	
	module.exports = ViewStudents;

/***/ },

/***/ 221:
/*!*******************************!*\
  !*** ./components/tab-bar.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = React.createClass({
		displayName: "TabBar",
	
		render: function () {
	
			var tabs = this.props.data.tabData.map(function (tab, i) {
				return React.createElement(
					"li",
					{ role: "presentation", key: i, className: tab.active ? "active" : "" },
					React.createElement(
						"a",
						{ href: tab.tabLink },
						tab.tabName
					)
				);
			});
	
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					{ className: "nav nav-tabs" },
					tabs
				)
			);
		}
	});
	
	module.exports = TabBar;

/***/ },

/***/ 222:
/*!**************************************!*\
  !*** ./components/sortable-table.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var SortableTableHeader = __webpack_require__(/*! ./sortable-table-header.js */ 223);
	var SortableTableBody = __webpack_require__(/*! ./sortable-table-body.js */ 225);
	
	var SortableTable = React.createClass({
	    displayName: "SortableTable",
	
	    propTypes: {
	        data: React.PropTypes.array.isRequired,
	        columns: React.PropTypes.array.isRequired,
	        style: React.PropTypes.object,
	        iconStyle: React.PropTypes.object
	    },
	
	    getInitialState: function () {
	        var sortings = this.getDefaultSortings();
	
	        return {
	            sortings: sortings
	        };
	    },
	
	    getDefaultSortings: function () {
	        return this.props.columns.map(function (column) {
	            var sorting = "both";
	            if (column.defaultSorting) {
	                var defaultSorting = column.defaultSorting.toLowerCase();
	
	                if (defaultSorting == "desc") {
	                    sorting = "desc";
	                } else if (defaultSorting == "asc") {
	                    sorting = "asc";
	                }
	            }
	            return sorting;
	        });
	    },
	
	    sortData: function (data, sortings) {
	        var sortedData = this.props.data;
	        for (var i in sortings) {
	            var sorting = sortings[i];
	            var column = this.props.columns[i];
	            var key = this.props.columns[i].key;
	            switch (sorting) {
	                case "desc":
	                    if (column.descSortFunction && typeof column.descSortFunction == "function") {
	                        sortedData = column.descSortFunction(sortedData, key);
	                    } else {
	                        sortedData = this.descSortData(sortedData, key);
	                    }
	                    break;
	                case "asc":
	                    if (column.ascSortFunction && typeof column.ascSortFunction == "function") {
	                        sortedData = column.ascSortFunction(sortedData, key);
	                    } else {
	                        sortedData = this.ascSortData(sortedData, key);
	                    }
	                    break;
	            }
	        }
	        return sortedData;
	    },
	
	    ascSortData: function (data, key) {
	        return this.sortDataByKey(data, key, (function (a, b) {
	            if (this.parseFloatable(a) && this.parseFloatable(b)) {
	                a = this.parseIfFloat(a);
	                b = this.parseIfFloat(b);
	            }
	            if (a >= b) {
	                return 1;
	            } else if (a < b) {
	                return -1;
	            }
	        }).bind(this));
	    },
	
	    descSortData: function (data, key) {
	        return this.sortDataByKey(data, key, (function (a, b) {
	            if (this.parseFloatable(a) && this.parseFloatable(b)) {
	                a = this.parseIfFloat(a);
	                b = this.parseIfFloat(b);
	            }
	            if (a <= b) {
	                return 1;
	            } else if (a > b) {
	                return -1;
	            }
	        }).bind(this));
	    },
	
	    parseFloatable: function (value) {
	        return typeof value === "string" && (/^\d+$/.test(value) || /^\d+$/.test(value.replace(/[,.%$]/g, ""))) ? true : false;
	    },
	
	    parseIfFloat: function (value) {
	        return parseFloat(value.replace(/,/g, ""));
	    },
	
	    sortDataByKey: function (data, key, fn) {
	        var clone = Array.apply(null, data);
	
	        return clone.sort(function (a, b) {
	            return fn(a[key], b[key]);
	        });
	    },
	
	    onStateChange: function (index) {
	        var sortings = this.state.sortings.map((function (sorting, i) {
	            if (i == index) sorting = this.nextSortingState(sorting);
	
	            return sorting;
	        }).bind(this));
	
	        this.setState({
	            sortings: sortings
	        });
	    },
	
	    nextSortingState: function (state) {
	        var next;
	        switch (state) {
	            case "both":
	                next = "desc";
	                break;
	            case "desc":
	                next = "asc";
	                break;
	            case "asc":
	                next = "both";
	                break;
	        }
	        return next;
	    },
	
	    render: function () {
	        var sortedData = this.sortData(this.props.data, this.state.sortings);
	
	        return React.createElement(
	            "table",
	            { className: "table table-striped table-bordered filledTable table-hover", style: this.props.style },
	            React.createElement(SortableTableHeader, { columns: this.props.columns, sortings: this.state.sortings, onStateChange: this.onStateChange, iconStyle: this.props.iconStyle }),
	            React.createElement(SortableTableBody, { columns: this.props.columns, data: sortedData, sortings: this.state.sortings, removeRow: this.props.removeRow })
	        );
	    }
	});
	
	module.exports = SortableTable;

/***/ },

/***/ 223:
/*!*********************************************!*\
  !*** ./components/sortable-table-header.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var icons = __webpack_require__(/*! ./icons.js */ 224);
	var SortIconBoth = icons.SortIconBoth;
	var SortIconDesc = icons.SortIconDesc;
	var SortIconAsc = icons.SortIconAsc;
	
	var SortableTableHeader = React.createClass({
	    displayName: "SortableTableHeader",
	
	    propTypes: {
	        columns: React.PropTypes.array.isRequired,
	        sortings: React.PropTypes.array.isRequired,
	        onStateChange: React.PropTypes.func,
	        iconStyle: React.PropTypes.object
	    },
	
	    onClick: function (index) {
	        this.props.onStateChange(index);
	    },
	
	    render: function () {
	        var headers = this.props.columns.map((function (column, index) {
	            var sorting = this.props.sortings[index];
	            return React.createElement(SortableTableHeaderItem, { sortable: column.sortable, key: index, index: index, header: column.header, sorting: sorting, onClick: this.onClick, style: column.headerStyle, iconStyle: this.props.iconStyle });
	        }).bind(this));
	
	        return React.createElement(
	            "thead",
	            null,
	            React.createElement(
	                "tr",
	                null,
	                headers
	            )
	        );
	    }
	});
	
	var SortableTableHeaderItem = React.createClass({
	    displayName: "SortableTableHeaderItem",
	
	    getDefaultProps: function () {
	        return {
	            sortable: true
	        };
	    },
	
	    onClick: function (e) {
	        if (this.props.sortable) this.props.onClick(this.props.index);
	    },
	
	    render: function () {
	        var sortIcon;
	        if (this.props.sortable) {
	            sortIcon = React.createElement(SortIconBoth, { style: this.props.iconStyle });
	            if (this.props.sorting == "desc") {
	                sortIcon = React.createElement(SortIconDesc, { style: this.props.iconStyle });
	            } else if (this.props.sorting == "asc") {
	                sortIcon = React.createElement(SortIconAsc, { style: this.props.iconStyle });
	            }
	        }
	
	        return React.createElement(
	            "th",
	            { style: this.props.style, onClick: this.onClick, className: "sortedHeader" },
	            this.props.header,
	            sortIcon
	        );
	    }
	});
	
	module.exports = SortableTableHeader;

/***/ },

/***/ 224:
/*!*****************************!*\
  !*** ./components/icons.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var SortIconBoth = React.createClass({
	    displayName: "SortIconBoth",
	
	    render: function () {
	        return React.createElement(FaIcon, { icon: "fa-sort", style: this.props.style });
	    }
	});
	
	var SortIconAsc = React.createClass({
	    displayName: "SortIconAsc",
	
	    render: function () {
	        return React.createElement(FaIcon, { icon: "fa-sort-asc", style: this.props.style });
	    }
	});
	
	var SortIconDesc = React.createClass({
	    displayName: "SortIconDesc",
	
	    render: function () {
	        return React.createElement(FaIcon, { icon: "fa-sort-desc", style: this.props.style });
	    }
	});
	
	var FaIcon = React.createClass({
	    displayName: "FaIcon",
	
	    render: function () {
	        var className = "fa fa-lg ";
	        className += this.props.icon;
	        return React.createElement("i", { className: className, style: this.props.style, align: "right" });
	    }
	});
	
	exports.SortIconBoth = SortIconBoth;
	exports.SortIconDesc = SortIconDesc;
	exports.SortIconAsc = SortIconAsc;

/***/ },

/***/ 225:
/*!*******************************************!*\
  !*** ./components/sortable-table-body.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var SortableTableBody = React.createClass({
	    displayName: "SortableTableBody",
	
	    propTypes: {
	        data: React.PropTypes.array.isRequired,
	        columns: React.PropTypes.array.isRequired,
	        sortings: React.PropTypes.array.isRequired
	    },
	
	    render: function () {
	        var bodies = this.props.data.map((function (item, index) {
	            return React.createElement(SortableTableRow, { key: index, rowIndex: index, data: item, columns: this.props.columns, removeRow: this.props.removeRow });
	        }).bind(this));
	
	        return React.createElement(
	            "tbody",
	            null,
	            bodies
	        );
	    }
	});
	
	var SortableTableRow = React.createClass({
	    displayName: "SortableTableRow",
	
	    removeRow: function (index, event) {
	        this.props.removeRow(index);
	    },
	
	    render: function () {
	
	        var tds = this.props.columns.map((function (item, index) {
	            var value = this.props.data[item.key];
	            if (index === this.props.columns.length - 1 && this.props.removeRow) {
	                return React.createElement(
	                    "td",
	                    { key: index },
	                    React.createElement(
	                        "button",
	                        { key: index, onClick: this.removeRow.bind(this, this.props.data) },
	                        "X"
	                    )
	                );
	            } else {
	                return React.createElement(
	                    "td",
	                    { key: index, style: item.dataStyle },
	                    value
	                );
	            }
	        }).bind(this));
	
	        return React.createElement(
	            "tr",
	            null,
	            tds
	        );
	    }
	});
	
	module.exports = SortableTableBody;

/***/ },

/***/ 226:
/*!***********************************!*\
  !*** ./components/add-student.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	
	var AddStudent = React.createClass({
		displayName: "AddStudent",
	
		getInitialState: function () {
			return { value: '' };
		},
		handleChange: function (event) {
			this.setState({ value: event.target.value });
		},
	
		createStudent: function () {
			if (this.state.value) {
				// <--- api function call goes here!!!
				console.log("Student \"" + this.state.value + "\" was created"); //TEMP
				this.setState({ value: '' });
			}
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "View Students", tabLink: "#/studentmanager/viewall", active: false }, { tabName: "Add Students", tabLink: "#/studentmanager/add", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(
					"div",
					{ className: "panel panel-default" },
					React.createElement(
						"div",
						{ className: "panel-heading" },
						React.createElement(
							"h3",
							{ className: "panel-title" },
							"Create Student Account"
						)
					),
					React.createElement(
						"div",
						{ className: "panel-body" },
						React.createElement(
							"form",
							{ className: "form-inline" },
							React.createElement("input", { className: "form-control",
								type: "text",
								placeholder: "Student Name",
								value: this.state.value,
								onChange: this.handleChange }),
							React.createElement(
								"button",
								{ className: "btn btn-default",
									type: "submit",
									disabled: !this.state.value,
									onClick: this.createStudent },
								"Create"
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = AddStudent;
	
	//{(this.state.value === '') ? 'true' : 'false'}

/***/ },

/***/ 227:
/*!*************************************!*\
  !*** ./components/view-subjects.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var TabBar = __webpack_require__(/*! ./tab-bar.js */ 221);
	var SortableTable = __webpack_require__(/*! ./sortable-table.js */ 222);
	
	var ViewSubjects = React.createClass({
		displayName: 'ViewSubjects',
	
		getInitialState: function () {
			return {
				data: [{ subject: 'English 7' }, { subject: 'Math 8' }, { subject: 'Reading 7' }, { subject: 'Spanish 7' }]
			};
		},
	
		removeSubject: function (item) {
			// < -- insert api call here!!
			console.log("Removing subject: " + item.subject); //TEMP
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: true }, { tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: false }]
			};
	
			var columns = [{ header: "Subject", key: "subject" }, {} // Delete buttons column
			];
	
			return React.createElement(
				'div',
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(SortableTable, { data: this.state.data, columns: columns, removeRow: this.removeSubject })
			);
		}
	});
	
	module.exports = ViewSubjects;

/***/ },

/***/ 228:
/*!***********************************!*\
  !*** ./components/add-subject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	
	var AddSubject = React.createClass({
		displayName: "AddSubject",
	
		getInitialState: function () {
			return { value: '' };
		},
	
		handleChange: function (event) {
			this.setState({ value: event.target.value });
		},
	
		createSubject: function () {
			if (this.state.value) {
				// <--- api function call goes here!!!
				console.log("Subject \"" + this.state.value + "\" was created"); //TEMP
				this.setState({ value: '' });
			}
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: false }, { tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(
					"div",
					{ className: "panel panel-default" },
					React.createElement(
						"div",
						{ className: "panel-heading" },
						React.createElement(
							"h3",
							{ className: "panel-title" },
							"Create New Subject"
						)
					),
					React.createElement(
						"div",
						{ className: "panel-body" },
						React.createElement(
							"form",
							{ className: "form-inline" },
							React.createElement("input", { className: "form-control",
								type: "text",
								placeholder: "Subject Name",
								value: this.state.value,
								onChange: this.handleChange }),
							React.createElement(
								"button",
								{ className: "btn btn-default",
									type: "submit",
									disabled: !this.state.value,
									onClick: this.createSubject },
								"Create"
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = AddSubject;

/***/ },

/***/ 229:
/*!****************************************!*\
  !*** ./components/view-assignments.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var TabBar = __webpack_require__(/*! ./tab-bar.js */ 221);
	var SortableTable = __webpack_require__(/*! ./sortable-table.js */ 222);
	
	// SORTING FUNCTIONS CAN BE PLACED HERE - SEE CODE BELOW COMPONENT
	
	var ViewAssignments = React.createClass({
	    displayName: "ViewAssignments",
	
	    getInitialState: function () {
	        // var assignments will be replaced with api call
	        var assignments = [{ name: "Read pg 18, ex 1-10", subject: "English 7", dueDate: "11/12/15" }, { name: "Read pg 4, ex 20-36", subject: "Math 7", dueDate: "12/1/15" }, { name: "Read pg 75, ex 1-4", subject: "Reading 7", dueDate: "12/8/15" }, { name: "Read pg 13, ex 2-6", subject: "English 7", dueDate: "12/5/15" }];
	        return {
	            data: assignments
	        };
	    },
	    removeAssignment: function (item) {
	        // < -- insert api call here!!
	        console.log("Removing assignment: " + item.name); //TEMP
	    },
	
	    render: function () {
	
	        // OPTIONS CAN BE PLACED HERE - SEE EXAMPLE CODE BELOW COMPONENT
	
	        var tabs = {
	            tabData: [{ tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: true }, { tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: false }]
	        };
	
	        var columns = [{ header: "Name", key: "name" }, { header: "Subject", key: "subject" }, { header: "Due Date", key: "dueDate" }, { header: 'Delete', key: "xButton" } //Delete Button Column
	        ];
	
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(TabBar, { data: tabs }),
	            React.createElement(SortableTable, { data: this.state.data, columns: columns, removeRow: this.removeAssignment, deleteCol: "true" })
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

/***/ },

/***/ 230:
/*!**************************************!*\
  !*** ./components/add-assignment.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	
	var AddAssignment = React.createClass({
		displayName: "AddAssignment",
	
		getInitialState: function () {
			return { name: '', subject: '', dueDate: '', expDate: '' };
		},
		handleNameChange: function (event) {
			this.setState({ name: event.target.value });
		},
		handleSubjectChange: function (event) {
			this.setState({ subject: event.target.value });
		},
		handleDueDateChange: function (event) {
			this.setState({ dueDate: event.target.value });
		},
		handleExpDateChange: function (event) {
			this.setState({ expDate: event.target.value });
		},
		createAssignment: function () {
			if (this.state.name && this.state.subject && this.state.dueDate && this.state.expDate) {
				// <--- api function call goes here!!!
				console.log("Assignment \"" + this.state.value + "\" was created"); //TEMP
				this.setState({ value: '' });
			}
		},
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: false }, { tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(
					"div",
					{ className: "panel panel-default" },
					React.createElement(
						"div",
						{ className: "panel-heading" },
						React.createElement(
							"h3",
							{ className: "panel-title" },
							"Create New Assignment"
						)
					),
					React.createElement(
						"div",
						{ className: "panel-body" },
						React.createElement(
							"form",
							{ className: "form-horizontal" },
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ htmlFor: "inputTitle", className: "col-sm-2 control-label" },
									"Name"
								),
								React.createElement(
									"div",
									{ className: "col-sm-10" },
									React.createElement("input", { type: "text", className: "form-control",
										id: "inputTitle",
										placeholder: "Name",
										value: this.state.name,
										onChange: this.handleNameChange })
								)
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ htmlFor: "inputSubject", className: "col-sm-2 control-label" },
									"Subject"
								),
								React.createElement(
									"div",
									{ className: "col-sm-10" },
									React.createElement("input", { type: "text", className: "form-control",
										id: "inputSubject",
										placeholder: "Subject",
										value: this.state.subject,
										onChange: this.handleSubjectChange })
								)
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ htmlFor: "inputDueDate", className: "col-sm-2 control-label" },
									"Due Date"
								),
								React.createElement(
									"div",
									{ className: "col-sm-10" },
									React.createElement("input", { type: "date", className: "form-control",
										id: "inputDueDate",
										value: this.state.dueDate,
										onChange: this.handleDueDateChange })
								)
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ htmlFor: "inputExpDate", className: "col-sm-2 control-label" },
									"Expiration Date"
								),
								React.createElement(
									"div",
									{ className: "col-sm-10" },
									React.createElement("input", { type: "date", className: "form-control",
										id: "inputExpDate",
										value: this.state.expDate,
										onChange: this.handleExpDateChange })
								)
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"div",
									{ className: "col-sm-offset-2 col-sm-10" },
									React.createElement(
										"button",
										{ className: "btn btn-default",
											type: "submit",
											disabled: !this.state.name || !this.state.subject || !this.state.dueDate || !this.state.expDate,
											onClick: this.createAssignment },
										"Create"
									)
								)
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = AddAssignment;

/***/ },

/***/ 231:
/*!*******************************************!*\
  !*** ./components/current-assignments.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	var Dropdown = __webpack_require__(/*! ./dropdown.js */ 232);
	var SortableTable = __webpack_require__(/*! ./sortable-table.js */ 222);
	
	var CurrentAssignments = React.createClass({
		displayName: "CurrentAssignments",
	
		getInitialState: function () {
			// var assignments will be replaced with api call
			var assignments = [{ title: "Read pg 12, ex 1-10", subject: "English 7", student: "Billy Bob", dueDate: "11/12/15", expDate: "11/22/2015", submissions: '0', done: 'false' }, { title: "Read pg 18, ex 91-100", subject: "Math 7", student: "Billy Bob", dueDate: "11/13/15", expDate: "11/23/2015", submissions: '1', done: 'true' }, { title: "Read pg 98, ex 4-8", subject: "Reading 7", student: "Sally Sue", dueDate: "11/14/15", expDate: "11/24/2015", submissions: '0', done: 'false' }, { title: "Read pg 33, ex 1-5", subject: "English 7", student: "Sally Sue", dueDate: "11/15/15", expDate: "11/25/2015", submissions: '1', done: 'true' }];
			return {
				data: assignments,
				displayedData: assignments,
				studentSelected: '--Student--',
				subjectSelected: '--Subject--'
			};
		},
		filterData: function (studentSelected, subjectSelected) {
			var filtered = this.state.data;
			if (subjectSelected !== '--Subject--') {
				var filtered = filtered.filter(function (item) {
					return item.subject == subjectSelected;
				});
			};
			if (studentSelected !== '--Student--') {
				var filtered = filtered.filter(function (item) {
					return item.student == studentSelected;
				});
			};
			this.setState({
				displayedData: filtered,
				studentSelected: studentSelected,
				subjectSelected: subjectSelected
			});
		},
		handleSubjectDropdown: function (selected) {
			console.log(selected);
			this.filterData(this.state.studentSelected, selected);
		},
		handleStudentDropdown: function (selected) {
			console.log(selected);
			this.filterData(selected, this.state.subjectSelected);
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: true }, { tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: false }, { tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: false }]
			};
	
			var columns = [{ header: "Title", key: "title" }, { header: "Subject", key: "subject" }, { header: "Student", key: "student" }, { header: "Due Date", key: "dueDate" }, { header: "Expiration Date", key: "expDate" }, { header: "Submissions", key: "submissions" }, { header: "Done", key: "done" }];
	
			var subjectDropdown = {
				title: '--Subject--', //What should show up on the button to open/close the dropdown
				items: [// List of items to show in the dropdown
				'--Subject--', 'Math 7', 'English 7', 'Reading 7']
			};
	
			var studentDropdown = {
				title: '--Student--', //What should show up on the button to open/close the dropdown
				items: [// List of items to show in the dropdown
				'--Student--', 'Billy Bob', 'Sally Sue']
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(
					"div",
					{ className: "tabContent" },
					React.createElement(
						"div",
						{ className: "col-md-2 filterBy" },
						"Filter by:"
					),
					React.createElement(
						"div",
						{ className: "col-md-2 " },
						React.createElement(Dropdown, { title: subjectDropdown.title, items: subjectDropdown.items, itemSelected: this.handleSubjectDropdown })
					),
					React.createElement(
						"div",
						{ className: "col-md-2 " },
						React.createElement(Dropdown, { title: studentDropdown.title, items: studentDropdown.items, itemSelected: this.handleStudentDropdown })
					),
					React.createElement(SortableTable, { data: this.state.displayedData, columns: columns })
				)
			);
		}
	});
	
	module.exports = CurrentAssignments;

/***/ },

/***/ 232:
/*!********************************!*\
  !*** ./components/dropdown.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ListItem = __webpack_require__(/*! ./list-item */ 233);
	
	module.exports = React.createClass({
		displayName: 'exports',
	
		handleClick: function () {
			this.setState({
				open: !this.state.open
			});
		},
		getInitialState: function () {
			return { open: false };
		},
		handleItemClick: function (item) {
			this.props.itemSelected(item);
			this.setState({
				open: false,
				itemTitle: item
			});
		},
		render: function () {
			var list = this.props.items.map((function (item, i) {
				return React.createElement(ListItem, { key: i,
					item: item,
					whenItemClicked: this.handleItemClick,
					className: this.state.itemTitle === item ? "active" : "" });
			}).bind(this));
	
			return React.createElement(
				'div',
				{ className: 'dropdown' },
				React.createElement(
					'button',
					{ className: 'btn btn-default dropdown-toggle', onClick: this.handleClick },
					(this.state.itemTitle || this.props.title) + " ",
					React.createElement('span', { className: 'caret' })
				),
				React.createElement(
					'ul',
					{ className: "dropdown-menu " + (this.state.open ? "show" : "") },
					list
				)
			);
		}
	});

/***/ },

/***/ 233:
/*!*********************************!*\
  !*** ./components/list-item.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var ListItem = React.createClass({
		displayName: 'ListItem',
	
		handleClick: function () {
			this.props.whenItemClicked(this.props.item);
		},
		render: function () {
			return React.createElement(
				'li',
				{ className: this.props.className },
				React.createElement(
					'a',
					{ onClick: this.handleClick },
					this.props.item
				)
			);
		}
	});
	
	module.exports = ListItem;

/***/ },

/***/ 234:
/*!****************************************!*\
  !*** ./components/late-assignments.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	var Dropdown = __webpack_require__(/*! ./dropdown.js */ 232);
	var SortableTable = __webpack_require__(/*! ./sortable-table.js */ 222);
	
	var LateAssignments = React.createClass({
		displayName: "LateAssignments",
	
		getInitialState: function () {
			// var assignments will be replaced with api call
			var assignments = [{ title: "Read pg 12, ex 1-10", subject: "English 7", student: "Billy Bob", dueDate: "11/12/15", expDate: "11/22/2015", submissions: '0', done: 'false' }, { title: "Read pg 18, ex 91-100", subject: "Math 7", student: "Billy Bob", dueDate: "11/13/15", expDate: "11/23/2015", submissions: '1', done: 'true' }, { title: "Read pg 98, ex 4-8", subject: "Reading 7", student: "Sally Sue", dueDate: "11/14/15", expDate: "11/24/2015", submissions: '0', done: 'false' }, { title: "Read pg 33, ex 1-5", subject: "English 7", student: "Sally Sue", dueDate: "11/15/15", expDate: "11/25/2015", submissions: '1', done: 'true' }];
			return {
				data: assignments,
				displayedData: assignments,
				studentSelected: '--Student--',
				subjectSelected: '--Subject--'
			};
		},
		filterData: function (studentSelected, subjectSelected) {
			var filtered = this.state.data;
			if (subjectSelected !== '--Subject--') {
				var filtered = filtered.filter(function (item) {
					return item.subject == subjectSelected;
				});
			};
			if (studentSelected !== '--Student--') {
				var filtered = filtered.filter(function (item) {
					return item.student == studentSelected;
				});
			};
			this.setState({
				displayedData: filtered,
				studentSelected: studentSelected,
				subjectSelected: subjectSelected
			});
		},
		handleSubjectDropdown: function (selected) {
			console.log(selected);
			this.filterData(this.state.studentSelected, selected);
		},
		handleStudentDropdown: function (selected) {
			console.log(selected);
			this.filterData(selected, this.state.subjectSelected);
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: false }, { tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: true }, { tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: false }]
			};
	
			var columns = [{ header: "Title", key: "title" }, { header: "Subject", key: "subject" }, { header: "Student", key: "student" }, { header: "Due Date", key: "dueDate" }, { header: "Expiration Date", key: "expDate" }, { header: "Submissions", key: "submissions" }, { header: "Done", key: "done" }];
	
			var subjectDropdown = {
				title: '--Subject--', //What should show up on the button to open/close the dropdown
				items: [// List of items to show in the dropdown
				'--Subject--', 'Math 7', 'English 7', 'Reading 7']
			};
	
			var studentDropdown = {
				title: '--Student--', //What should show up on the button to open/close the dropdown
				items: [// List of items to show in the dropdown
				'--Student--', 'Billy Bob', 'Sally Sue']
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(
					"div",
					{ className: "tabContent" },
					React.createElement(
						"div",
						{ className: "col-md-2 filterBy" },
						"Filter by:"
					),
					React.createElement(
						"div",
						{ className: "col-md-2 " },
						React.createElement(Dropdown, { title: subjectDropdown.title, items: subjectDropdown.items, itemSelected: this.handleSubjectDropdown })
					),
					React.createElement(
						"div",
						{ className: "col-md-2 " },
						React.createElement(Dropdown, { title: studentDropdown.title, items: studentDropdown.items, itemSelected: this.handleStudentDropdown })
					),
					React.createElement(SortableTable, { data: this.state.displayedData, columns: columns })
				)
			);
		}
	});
	
	module.exports = LateAssignments;

/***/ },

/***/ 235:
/*!*******************************************!*\
  !*** ./components/expired-assignments.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 221);
	var Dropdown = __webpack_require__(/*! ./dropdown.js */ 232);
	var SortableTable = __webpack_require__(/*! ./sortable-table.js */ 222);
	
	var ExpiredAssignments = React.createClass({
		displayName: "ExpiredAssignments",
	
		getInitialState: function () {
			// var assignments will be replaced with api call
			var assignments = [{ title: "Read pg 12, ex 1-10", subject: "English 7", student: "Billy Bob", dueDate: "11/12/15", expDate: "11/22/2015", submissions: '0', done: 'false' }, { title: "Read pg 18, ex 91-100", subject: "Math 7", student: "Billy Bob", dueDate: "11/13/15", expDate: "11/23/2015", submissions: '1', done: 'true' }, { title: "Read pg 98, ex 4-8", subject: "Reading 7", student: "Sally Sue", dueDate: "11/14/15", expDate: "11/24/2015", submissions: '0', done: 'false' }, { title: "Read pg 33, ex 1-5", subject: "English 7", student: "Sally Sue", dueDate: "11/15/15", expDate: "11/25/2015", submissions: '1', done: 'true' }];
			return {
				data: assignments,
				displayedData: assignments,
				studentSelected: '--Student--',
				subjectSelected: '--Subject--'
			};
		},
		filterData: function (studentSelected, subjectSelected) {
			var filtered = this.state.data;
			if (subjectSelected !== '--Subject--') {
				var filtered = filtered.filter(function (item) {
					return item.subject == subjectSelected;
				});
			};
			if (studentSelected !== '--Student--') {
				var filtered = filtered.filter(function (item) {
					return item.student == studentSelected;
				});
			};
			this.setState({
				displayedData: filtered,
				studentSelected: studentSelected,
				subjectSelected: subjectSelected
			});
		},
		handleSubjectDropdown: function (selected) {
			console.log(selected);
			this.filterData(this.state.studentSelected, selected);
		},
		handleStudentDropdown: function (selected) {
			console.log(selected);
			this.filterData(selected, this.state.subjectSelected);
		},
	
		render: function () {
	
			var tabs = {
				tabData: [{ tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: false }, { tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: false }, { tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: true }]
			};
	
			var columns = [{ header: "Title", key: "title" }, { header: "Subject", key: "subject" }, { header: "Student", key: "student" }, { header: "Due Date", key: "dueDate" }, { header: "Expiration Date", key: "expDate" }, { header: "Submissions", key: "submissions" }, { header: "Done", key: "done" }];
	
			var subjectDropdown = {
				title: '--Subject--', //What should show up on the button to open/close the dropdown
				items: [// List of items to show in the dropdown
				'--Subject--', 'Math 7', 'English 7', 'Reading 7']
			};
	
			var studentDropdown = {
				title: '--Student--', //What should show up on the button to open/close the dropdown
				items: [// List of items to show in the dropdown
				'--Student--', 'Billy Bob', 'Sally Sue']
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: tabs }),
				React.createElement(
					"div",
					{ className: "tabContent" },
					React.createElement(
						"div",
						{ className: "col-md-2 filterBy" },
						"Filter by:"
					),
					React.createElement(
						"div",
						{ className: "col-md-2 " },
						React.createElement(Dropdown, { title: subjectDropdown.title, items: subjectDropdown.items, itemSelected: this.handleSubjectDropdown })
					),
					React.createElement(
						"div",
						{ className: "col-md-2 " },
						React.createElement(Dropdown, { title: studentDropdown.title, items: studentDropdown.items, itemSelected: this.handleStudentDropdown })
					),
					React.createElement(SortableTable, { data: this.state.displayedData, columns: columns })
				)
			);
		}
	});
	
	module.exports = ExpiredAssignments;

/***/ },

/***/ 236:
/*!*************************************************!*\
  !*** ../~/bootstrap/dist/css/bootstrap.min.css ***!
  \*************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 245:
/*!*********************!*\
  !*** ./css/app.css ***!
  \*********************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.js.map