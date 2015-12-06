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
	
	var App = __webpack_require__(/*! ./app.js */ 210);
	var Home = __webpack_require__(/*! ./home.js */ 213);
	var List = __webpack_require__(/*! ./list.js */ 214);
	var Login = __webpack_require__(/*! ./login.js */ 220);
	var Register = __webpack_require__(/*! ./register.js */ 221);
	
	var ViewStudents = __webpack_require__(/*! ./view-students.js */ 222);
	var AddStudent = __webpack_require__(/*! ./add-student.js */ 224);
	var ViewSubjects = __webpack_require__(/*! ./view-subjects.js */ 225);
	var AddSubject = __webpack_require__(/*! ./add-subject.js */ 226);
	var ViewAssignments = __webpack_require__(/*! ./view-assignments.js */ 227);
	var AddAssignment = __webpack_require__(/*! ./add-assignment.js */ 228);
	var CurrentAssignments = __webpack_require__(/*! ./current-assignments.js */ 229);
	var LateAssignments = __webpack_require__(/*! ./late-assignments.js */ 230);
	var ExpiredAssignments = __webpack_require__(/*! ./expired-assignments.js */ 231);
	
	__webpack_require__(/*! ../../~/bootstrap/dist/css/bootstrap.min.css */ 232);
	__webpack_require__(/*! ../css/app.css */ 241);
	
	var routes = React.createElement(
	  Router,
	  null,
	  React.createElement(
	    Route,
	    { name: "app", path: "/", component: App },
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { path: "/list", component: List }),
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

/***/ 210:
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	// Top-level component for the app
	var App = React.createClass({
	  displayName: "App",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // the user is logged in
	      loggedIn: auth.loggedIn()
	    };
	  },
	
	  // callback when user is logged in
	  setStateOnAuth: function (loggedIn) {
	    this.setState({ loggedIn: loggedIn });
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
	            { className: "navbar-header" },
	            React.createElement(
	              "button",
	              { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" },
	              React.createElement(
	                "span",
	                { className: "sr-only" },
	                "Toggle navigation"
	              ),
	              React.createElement("span", { className: "icon-bar" }),
	              React.createElement("span", { className: "icon-bar" }),
	              React.createElement("span", { className: "icon-bar" })
	            ),
	            React.createElement(
	              "a",
	              { className: "navbar-brand", href: "/" },
	              "List-o-matic"
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
	            this.state.loggedIn ? React.createElement(
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
	            ) : React.createElement("div", null)
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

/***/ 211:
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! jquery */ 212);
	
	// authentication object
	var auth = {
	  register: function (name, username, password, cb) {
	    // submit request to server, call the callback when complete
	    var url = "/api/users/register";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        name: name,
	        username: username,
	        password: password
	      },
	      // on success, store a login token
	      success: (function (res) {
	        localStorage.token = res.token;
	        localStorage.name = res.name;
	        this.onChange(true);
	        if (cb) cb(true);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false);
	        if (cb) cb(false);
	      }).bind(this)
	    });
	  },
	  // login the user
	  login: function (username, password, cb) {
	    // submit login request to server, call callback when complete
	    cb = arguments[arguments.length - 1];
	    // check if token in local storage
	    if (localStorage.token) {
	      this.onChange(true);
	      if (cb) cb(true);
	      return;
	    }
	
	    // submit request to server
	    var url = "/api/users/login";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        username: username,
	        password: password
	      },
	      success: (function (res) {
	        // on success, store a login token
	        localStorage.token = res.token;
	        localStorage.name = res.name;
	        this.onChange(true);
	        if (cb) cb(true);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false);
	        if (cb) cb(false);
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
	  // logout the user, call the callback when complete
	  logout: function (cb) {
	    delete localStorage.token;
	    this.onChange(false);
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

/***/ 213:
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
	      "p",
	      null,
	      React.createElement(
	        Link,
	        { className: "btn btn-default", to: "login" },
	        "Login"
	      ),
	      " or ",
	      React.createElement(
	        Link,
	        { className: "btn btn-warning", to: "register" },
	        "Register"
	      )
	    );
	  }
	});
	
	module.exports = Home;

/***/ },

/***/ 214:
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var ListHeader = __webpack_require__(/*! ./listheader.js */ 215);
	var ListEntry = __webpack_require__(/*! ./listentry.js */ 217);
	var ListItems = __webpack_require__(/*! ./listitems.js */ 218);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
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

/***/ 215:
/*!**********************************!*\
  !*** ./components/listheader.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	
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

/***/ 216:
/*!***************************!*\
  !*** ./components/api.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! jquery */ 212);
	
	// API object
	var api = {
	  // get the list of items, call the callback when complete
	  getItems: function (cb) {
	    var url = "/api/items";
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
	  // add an item, call the callback when complete
	  addItem: function (title, cb) {
	    var url = "/api/items";
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        item: {
	          'title': title
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
	  // update an item, call the callback when complete
	  updateItem: function (item, cb) {
	    var url = "/api/items/" + item.id;
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        item: {
	          title: item.title,
	          completed: item.completed
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
	  // delete an item, call the callback when complete
	  deleteItem: function (item, cb) {
	    var url = "/api/items/" + item.id;
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

/***/ 217:
/*!*********************************!*\
  !*** ./components/listentry.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	
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

/***/ 218:
/*!*********************************!*\
  !*** ./components/listitems.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Item = __webpack_require__(/*! ./item.js */ 219);
	
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

/***/ 219:
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	
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

/***/ 220:
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
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
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;
	    if (!username || !password) {
	      return;
	    }
	    // login via API
	    auth.login(username, password, (function (loggedIn) {
	      // login callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	      this.history.pushState(null, '/list');
	    }).bind(this));
	  },
	
	  // show the login form
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "Login"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.login },
	        React.createElement("input", { type: "text", placeholder: "Username", ref: "username", autoFocus: true }),
	        React.createElement("input", { type: "password", placeholder: "Password", ref: "password" }),
	        React.createElement("input", { className: "btn btn-warning", type: "submit", value: "Login" }),
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

/***/ 221:
/*!********************************!*\
  !*** ./components/register.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
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
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;
	    if (!name || !username || !password) {
	      return;
	    }
	    // register via the API
	    auth.register(name, username, password, (function (loggedIn) {
	      // register callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	      this.history.pushState(null, '/list');
	    }).bind(this));
	  },
	
	  // show the registration form
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "Register"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.register },
	        React.createElement("input", { type: "text", placeholder: "Name", ref: "name", autoFocus: true }),
	        React.createElement("input", { type: "text", placeholder: "Username", ref: "username" }),
	        React.createElement("input", { type: "password", placeholder: "Password", ref: "password" }),
	        React.createElement("input", { className: "btn", type: "submit", value: "Register" }),
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

/***/ 222:
/*!*************************************!*\
  !*** ./components/view-students.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var ViewStudents = React.createClass({
		displayName: "ViewStudents",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "View Students", tabLink: "#/studentmanager/viewall", active: true }, { tabName: "Add Students", tabLink: "#/studentmanager/add", active: false }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"View Students!!!!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = ViewStudents;

/***/ },

/***/ 223:
/*!*******************************!*\
  !*** ./components/tab-bar.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = React.createClass({
		displayName: "TabBar",
	
		render: function () {
	
			var tabs = this.props.data.tabData.map(function (tab) {
				return React.createElement(
					"li",
					{ role: "presentation", key: tab.tabName, className: tab.active ? "active" : "" },
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

/***/ 224:
/*!***********************************!*\
  !*** ./components/add-student.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var AddStudent = React.createClass({
		displayName: "AddStudent",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "View Students", tabLink: "#/studentmanager/viewall", active: false }, { tabName: "Add Students", tabLink: "#/studentmanager/add", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"Add Student!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = AddStudent;

/***/ },

/***/ 225:
/*!*************************************!*\
  !*** ./components/view-subjects.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar.js */ 223);
	
	var ViewSubjects = React.createClass({
		displayName: "ViewSubjects",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: true }, { tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: false }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"View Subjects!!!!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = ViewSubjects;

/***/ },

/***/ 226:
/*!***********************************!*\
  !*** ./components/add-subject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var AddSubject = React.createClass({
		displayName: "AddSubject",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "View Subjects", tabLink: "#/subjectmanager/viewall", active: false }, { tabName: "Add Subject", tabLink: "#/subjectmanager/add", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"Add Subject!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = AddSubject;

/***/ },

/***/ 227:
/*!****************************************!*\
  !*** ./components/view-assignments.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var ViewAssignments = React.createClass({
		displayName: "ViewAssignments",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: true }, { tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: false }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"View Assignments!!!!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = ViewAssignments;

/***/ },

/***/ 228:
/*!**************************************!*\
  !*** ./components/add-assignment.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var AddAssignment = React.createClass({
		displayName: "AddAssignment",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "View Assignments", tabLink: "#/assignmentmanager/viewall", active: false }, { tabName: "Add Assignment", tabLink: "#/assignmentmanager/add", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"Add Assignment!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = AddAssignment;

/***/ },

/***/ 229:
/*!*******************************************!*\
  !*** ./components/current-assignments.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var CurrentAssignments = React.createClass({
		displayName: "CurrentAssignments",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: true }, { tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: false }, { tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: false }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"Current Assignments!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = CurrentAssignments;

/***/ },

/***/ 230:
/*!****************************************!*\
  !*** ./components/late-assignments.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var LateAssignments = React.createClass({
		displayName: "LateAssignments",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: false }, { tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: true }, { tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: false }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"Late Assignments!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = LateAssignments;

/***/ },

/***/ 231:
/*!*******************************************!*\
  !*** ./components/expired-assignments.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var api = __webpack_require__(/*! ./api.js */ 216);
	var auth = __webpack_require__(/*! ./auth.js */ 211);
	
	var TabBar = __webpack_require__(/*! ./tab-bar */ 223);
	
	var ExpiredAssignments = React.createClass({
		displayName: "ExpiredAssignments",
	
		render: function () {
	
			var myData = {
				tabData: [{ tabName: "Current Assignments", tabLink: "#/studentassignments/current", active: false }, { tabName: "Late Assignments", tabLink: "#/studentassignments/late", active: false }, { tabName: "Expired Assignments", tabLink: "#/studentassignments/expired", active: true }]
			};
	
			return React.createElement(
				"div",
				null,
				React.createElement(TabBar, { data: myData }),
				"Expired Assignments!!!!!!!!!!!!!!!!!!!!!"
			);
		}
	});
	
	module.exports = ExpiredAssignments;

/***/ },

/***/ 232:
/*!*************************************************!*\
  !*** ../~/bootstrap/dist/css/bootstrap.min.css ***!
  \*************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 241:
/*!*********************!*\
  !*** ./css/app.css ***!
  \*********************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map