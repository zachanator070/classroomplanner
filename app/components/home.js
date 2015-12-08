var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

// Home page, which shows Login and Register buttons
var Home = React.createClass({
  render: function() {
    return (
      <div className="content">
      <div>
        <h1>What is due today?</h1>
        <p>
            Sign in with your username and password to find out!
        </p>
        <p>
          <Link className="btn btn-default" to="login">Login</Link>
        </p>
      </div>
      </div>
    );
  }
});

module.exports = Home;
