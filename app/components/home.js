var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

// Home page, which shows Login and Register buttons
var Home = React.createClass({
  render: function() {
    return (
      <div className="content">
      <div className="greeting">
        <h1>Welcome to the Classroom Planner</h1>
        <p>
          Your interactive planner for all your classroom needs!<br/>New instructor? Create an account!
        </p>
        <p>
          <Link className="btn btn-default btn-primary" to="login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp; <Link className="btn btn-default btn-primary" to="register">Register</Link>
        </p>

      </div>
      </div>
    );
  }
});

module.exports = Home;
