var $ = require("jquery");

// authentication object
var auth = {
  //register: function(name, username, password, cb) {
  register: function(name, password, cb) {
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
      success: function(res) {
        localStorage.token = res.token;
        localStorage.name = res.name;

        this.onChange(true,res.type);
        localStorage.type = res.type;
        if (cb)
          cb(true);
      }.bind(this),
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.name;
        delete localStorage.type;
        delete localStorage.token;
        this.onChange(false, null);

        if (cb)
          cb(false);
      }.bind(this)
    });
  },
  // login the user
  login: function(name, password, cb) {

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
      success: function(res) {
        // on success, store a login token
        localStorage.token = res.token;
        localStorage.name = res.name;
        localStorage.type = res.type;

        this.onChange(true,res.type);
        if (cb)
          cb(true,res.type);
      }.bind(this),
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        this.onChange(false,null);
        if (cb)
          cb(false,null);
      }.bind(this)
    });
  },
  // get the token from local storage
  getToken: function() {
    return localStorage.token;
  },
  // get the name from local storage
  getName: function() {
    return localStorage.name;
  },
  //get the users type from local storage
  getType: function(){
    return localStorage.type;
  },
  // logout the user, call the callback when complete
  logout: function(cb) {
    delete localStorage.token;
    delete localStorage.type;
    this.onChange(false,null);
    if (cb) cb();
  },
  // check if user is logged in
  loggedIn: function() {
    return !!localStorage.token;
  },
  // default onChange function
  onChange: function() {},
};

module.exports = auth;
