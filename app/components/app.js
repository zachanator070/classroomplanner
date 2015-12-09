var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");

// Top-level component for the app
var App = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // the user is logged in
      loggedIn: auth.loggedIn(),
      type: auth.getType()
    };
  },

  // callback when user is logged in
  setStateOnAuth: function(loggedIn, type) {
    this.setState({loggedIn:loggedIn,type:type});
  },

  // when the component loads, setup the callback
  componentWillMount: function() {
    auth.onChange = this.setStateOnAuth;
  },

  // logout the user and redirect to home page
  logout: function(event) {
    auth.logout();
    this.history.pushState(null, '/');
  },

  // show the navigation bar
  // the route handler replaces the RouteHandler element with the current page
  render: function() {

    var links;

    if(this.state.loggedIn) {
        if(this.state.type==="instructor"){
          links = (
            <ul className="nav navbar-nav">
              <li><a href="#/subjectmanager/viewall">Subject Manager</a></li>
              <li><a href="#/assignmentmanager/viewall">Assignment Manager</a></li>
              <li><a href="#/studentmanager/viewall">Student Manager</a></li>
              <li><a href="#/studentassignments/late">Student Assignments</a></li>
              <li><a href="#" onClick={this.logout}>Logout</a></li>
            </ul>
          );
        }
        else if(this.state.type==="student"){
          links = (
            <ul className="nav navbar-nav">
              <li><a href="/">A link for a student</a></li>
            </ul>
          );
        }
     }
     else{
       links =(<div></div>);
     }

    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="col-md-1"><a href="/"><img className="logo" src="../logo.png" /></a></div>
            <div className="col-md-6"><h1 className="navbar-brand">Classroom Planner</h1></div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               {links}
            </div>
          </div>
        </nav>
	<div className="container">
	  {this.props.children}
	</div>
      </div>
    );

  }
});

module.exports = App;
