var app = require('./express.js');
var User = require('./user.js');
var Subject = require('./subject.js');
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
        user.type = "instructor";

        user.save(function(err) {
        	if (err) {
        	  res.sendStatus("403");
        	  return;
        	}
          // create a token
        	var token = User.generateToken(user.name);
          // return value is JSON containing the user's name and token
          res.json({name: user.name, token: token, type: user.type});
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
      var token = User.generateToken(user.name);
      // return value is JSON containing user's name and token
      res.json({name: user.name, token: token,type:user.type});

    } else {
      res.sendStatus(403);
    }
  });
});

// addStudent
app.put('/api/users/:userName',function(req,res){

  User.findOrCreate({name: req.body.name}, function(err, user, created) {

    if (created) {
        // if this username is not taken, then create a user record
        user.name = req.body.name;
        user.password = req.body.password;
        user.type = "student";
        user.subjects = [];
        user.instructor = req.headers.instructor;

        user.save(function(err) {
          if (err) {
            res.sendStatus("403");
            return;
          }
        });
    } else {
      // return an error if the username is taken
      res.sendStatus("403");
    }
  });
});

// getStudents
app.get('/api/users/:instructor', function (req, res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      User.find({instructor: req.params.instructor}, function(err, users) {

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


// deleteStudent
app.delete('/api/users/:student_name', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      User.find({ name: req.params.student_name }).remove( function(err,student) {

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

// addAssignment
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

// getSubjects by instructor
app.get('/api/subjects/:instructor', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Subject.find({instructor:req.params.instructor}, function(err, subjects) {
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

// addSubject
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

// deleteSubject
app.delete('/api/subjects/:subject_name', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested subject and remove it
      Subject.find({ name: req.params.subject_name }).remove( function(err,subject) {  
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
