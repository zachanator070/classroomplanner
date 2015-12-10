var $ = require("jquery");
// API object
var api = {

  //
  //student functions
  //

  // get the list of all students by subject, call the callback when complete
  getStudents: function(subject, cb) {
    var url = "/api/users/"+subject;
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  // adds a student for a particular instructor
  addStudent: function(studentName,password, cb) {
    var url = "/api/users/"+studentName;
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'PUT',
      headers: {'Authorization': localStorage.token},
      data:{
        name:studentName,
        password:password
      },
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  //
  //assignment functions
  //

  // get the list of assignments by subject, call the callback when complete
  getAssignments: function(subject, cb) {
    var url = "/api/assignments";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token, 'Subject':subject},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  // add an assignment for a subject, call the callback when complete
  addAssignment: function(subject, title, dueDate, expirationDate, cb) {
    var url = "/api/assignments";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        assignment: {
          'subject':subject,
          'title': title,
          'dueDate':dueDate,
          'expirationDate': expirationDate
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });

  },

  // update an assignment, call the callback when complete
  updateAssignment: function(assignment, cb) {
    var url = "/api/assignments/"+assignment._id;
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
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is any error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  // delete an assignment, call the callback when complete
  deleteAssignment: function(assignment, cb) {
    var url = "/api/assignments/"+assignment._id;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  //
  //student assigment functions
  //

  // get the list of assignmentss by student name, call the callback when complete
  getStudentAssignments: function(name, cb) {
    var url = "/api/studentAssignments";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token, 'Name':name},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  // add an assignment for a student, call the callback when complete
  addStudentAssignment: function(assignmentName, completed, timeSubmitted, student, cb) {
    var url = "/api/studentAssignments";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        assignment: {
          'assignmentName':assignmentName,
          'completed': completed,
          'timeSubmitted':timeSubmitted,
          'student': student
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });

  },

  // update a student's assignment, call the callback when complete
  updateStudentAssignment: function(assignment, cb) {
    var url = "/api/assignments/"+assignment._id;
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
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is any error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  // delete a student's assignment, call the callback when complete
  deleteStudentAssignment: function(assignment, cb) {
    var url = "/api/assignments/"+assignment._id;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  //
  // subject functions
  //

  // get the list of subjects by instructor, call the callback when complete
  getSubjects: function(name, cb) {
    var url = "/api/subjects";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token, 'Instructor':instructor},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  // add a subject for an instructor, call the callback when complete
  addSubject: function(name, instructor, cb) {
    var url = "/api/subjects";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        subject: {
          'name':name,
          'instructor': instructor
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });

  },

  // delete a subject, call the callback when complete
  deleteSubject: function(subject, cb) {
    var url = "/api/subjects/"+subject._id;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  }


};

module.exports = api;
