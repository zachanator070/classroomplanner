var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");

// Login page, shows the login form and redirects to the list if login is successful
var Login = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false
    };

  },

  // handle login button submit
  login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if (!username || !password) {
      return;
    }

    // login via API
    auth.login(username, password, function(loggedIn) {
      // login callback
      if (!loggedIn)
        return this.setState({
          error: true
        });

        console.log("Type of user:"+auth.getType());

      if(auth.getType()=="instructor"){
        this.history.pushState(null, '/studentassignments/late');
      }else{

      }
    }.bind(this));
  },

  // show the login form
  render: function() {
    return (
      <div className="content">
        <h2>Login</h2>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="text" className="shortInput form-control" placeholder="Username" ref="username" autoFocus={true} /><br/>
          <input type="password"className="shortInput form-control" placeholder="Password" ref="password"/><br/>
          <input className="btn btn-primary btn-padding" type="submit" value="Login" /><br/>
          {this.state.error ? (
             <div className="alert">Invalid username or password.</div>
           ) : null}
        </form>
      </div>
    );
  }
});

module.exports = Login;
