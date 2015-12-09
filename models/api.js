var app = require('./express.js');
var User = require('./user.js');
var Assignment = require('./assignment.js');
var StudentAssignment = require('./studentAssignment.js');

// setup body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//
// user urls
//

// register a user
app.post('/api/users/register', function (req, res) {
  // find or create the user with the given username
  User.findOrCreate({name: req.body.name}, function(err, user, created) {
    if (created) {
        // if this username is not taken, then create a user record
        user.name = req.body.name;
        user.password = req.body.password;
        user.save(function(err) {
        	if (err) {
        	  res.sendStatus("403");
        	  return;
        	}
          // create a token
        	var token = User.generateToken(user.name);
          // return value is JSON containing the user's name and token
          res.json({name: user.name, token: token});
          });
    } else {
      // return an error if the username is taken
      res.sendStatus("403");
    }
  });
});

// login a user
app.post('/api/users/login', function (req, res) {

  // find the user with the given username
  User.findOne({name: req.body.name}, function(err,user) {
    if (err) {
      res.sendStatus(403);
      return;
    }

    // validate the user exists and the password is correct
    if (user && user.checkPassword(req.body.password)) {
      // create a token
      var token = User.generateToken(user.username);
      // return value is JSON containing user's name and token
      res.json({name: user.name, token: token,type:user.type});

    } else {
      res.sendStatus(403);
    }
  });
});

app.put('/api/users/:user_id',function(){
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested user
      User.findById(req.params.user_id, function(err,user) {
        if (err) {
          res.sendStatus(403);
          return;
        }

        if(user.type === "student"){
          user.name = req.body.user.name;
          user.type = req.body.user.type
          user.password = req.body.user.password;
          user.subjects = req.body.user.subjects;
        }

        else{
          user.name = req.body.user.name;
          user.type = req.body.user.type
          user.password = req.body.user.password;
          user.students = req.body.user.students;
        }

        user.save(function(err) {
          if (err) {
            res.sendStatus(403);
            return;
          }
          // return value is the assignment as JSON
          res.json({assignment:assignment});
        });
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// return a list of users with the given subject
app.post('/api/users/:subject', function (req, res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      User.find({subject:req.params.subject}, function(err, users) {
        if (err) {
          res.sendStatus(403);
          return;
        }
        // return value is the list of users as JSON
        res.json({users: users});
        });
    } else {
      res.sendStatus(403);
    }
  });
});

//
// assignment urls
//

// get all assignments for the user
app.get('/api/assignments', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Assignment.find({subject:req.headers.subject}, function(err, assignments) {
        if (err) {
          res.sendStatus(403);
          return;
        }
        // return value is the list of assignments as JSON
        res.json({assignments: assignments});
      });
    }
    else {
      res.sendStatus(403);
    }
  });
});

// add an assignment
app.post('/api/assignments', function (req,res) {
  // validate the supplied token
  // get indexes
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the assignment for the user
      Assignement.create({subject:req.body.assignment.subject,
                          title:req.body.assignment.title,
                          dueDate:req.body.assignment.dueDate,
                          expirationDate:req.body.assignment.expirationDate},
                           function(err,assignment) {
                            	if (err) {
                            	  res.sendStatus(403);
                            	  return;
                            	}
                            	res.json({assignment:assignment});
                            });
    } else {
      res.sendStatus(403);
    }
  });
});

// update an assignment
app.put('/api/assignments/:assignment_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested assignment
      Assignment.findById(req.params.assignment_id, function(err,assignment) {
        if (err) {
          res.sendStatus(403);
          return;
        }

        assignment.title = req.body.assignment.title;
        assignment.subject = req.body.assignment.subject;
        assignment.dueDate = req.body.assignment.dueDate;
        assignment.expirationDate = req.body.assignment.expirationDate;

        assignment.save(function(err) {
      	  if (err) {
      	    res.sendStatus(403);
      	    return;
      	  }
          // return value is the assignment as JSON
          res.json({assignment:assignment});
        });
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// delete an assignment
app.delete('/api/assignments/:assignment_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Assignment.findByIdAndRemove(req.params.assignment_id, function(err,assignement) {
      	if (err) {
      	  res.sendStatus(403);
      	  return;
      	}
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
});

//
// Student Assignment urls
//

// get all assignments for the user
app.get('/api/studentAssignments', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      StudentAssignment.find({student:req.headers.name}, function(err, assignments) {
        if (err) {
          res.sendStatus(403);
          return;
        }
        // return value is the list of assignments as JSON
        res.json({assignments: assignments});
      });
    }
    else {
      res.sendStatus(403);
    }
  });
});

// add an assignment
app.post('/api/studentAssignments', function (req,res) {
  // validate the supplied token
  // get indexes
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the assignment for the user
      Assignement.create({assignmentName:req.body.assignment.assignmentName,
                          completed:req.body.assignment.completed,
                          timeSubmitted:req.body.assignment.timeSubmitted,
                          student:req.body.assignment.student},
                          function(err,assignment) {
                          	if (err) {
                          	  res.sendStatus(403);
                          	  return;
                          	}
                          	res.json({assignment:assignment});
                          });
    } else {
      res.sendStatus(403);
    }
  });
});

// update an assignment
app.put('/api/studentAssignments/:assignment_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested assignment
      StudentAssignment.findById(req.params.assignment_id, function(err,assignment) {
        if (err) {
          res.sendStatus(403);
          return;
        }

        assignment.assignmentName = req.body.assignment.assignmentName;
        assignment.completed = req.body.assignment.completed;
        assignment.timeSubmitted = req.body.assignment.timeSubmitted;
        assignment.student = req.body.assignment.student;

        assignment.save(function(err) {
      	  if (err) {
      	    res.sendStatus(403);
      	    return;
      	  }
          // return value is the assignment as JSON
          res.json({assignment:assignment});
        });
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// delete an assignment
app.delete('/api/studentAssignments/:assignment_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      StudentAssignment.findByIdAndRemove(req.params.assignment_id, function(err,assignement) {
      	if (err) {
      	  res.sendStatus(403);
      	  return;
      	}
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
});

//
// Subject Urls
//

// get all subjects for the user
app.get('/api/subjects', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Subject.find({instructor:req.headers.Instructor}, function(err, subjects) {
        if (err) {
          res.sendStatus(403);
          return;
        }
        // return value is the list of assignments as JSON
        res.json({subjects: subjects});
      });
    }
    else {
      res.sendStatus(403);
    }
  });
});

// add a subject
app.post('/api/subjects', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the subject for the instructor
      Subject.create({name:req.body.subject.name,
                        instructor:req.body.subject.instructor},
                          function(err,subject) {
                          	if (err) {
                          	  res.sendStatus(403);
                          	  return;
                          	}
                          	res.json({subject:subject});
                          });
    } else {
      res.sendStatus(403);
    }
  });
});

// delete a subject
app.delete('/api/subjects/:subject_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested subject and remove it
      Subject.findByIdAndRemove(req.params.subject_id, function(err,subject) {
      	if (err) {
      	  res.sendStatus(403);
      	  return;
      	}
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
});
