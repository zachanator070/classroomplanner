var $ = require("jquery");
// API object
var api = {

  //
  //student functions
  //

  // update a student, call the callback when complete
  updateStudent: function(name, subjects, cb) {
    console.log('name and subject params');
    console.log(name);
    console.log(subjects);
    var url = "/api/users/"+name;
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        student: {
          subjects: subjects
        }
      }),
      type: 'POST',
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

    // get the list of all students by instructor, call the callback when complete
  getStudent: function(name, cb) {
    var url = "/api/users/"+name;
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

  // get the list of all students by instructor, call the callback when complete
  getStudents: function(cb) {
    var url = "/api/users/";
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

    console.log('localStorage.name: ' + localStorage.name); //TEMP

    $.ajax({
      url: url,
      dataType: 'application/json',
      type: 'PUT',
      headers: {'Authorization': localStorage.token, 'Instructor': localStorage.name},
      data: {
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

  // delete a student, call the callback when complete
  deleteStudent: function(name, cb) {
    var url = "/api/users/"+ name; //Not sure what this should be...
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
  //assignment functions
  //

  // get the list of assignments by instructor, call the callback when complete
  getAssignments: function(cb) {
    var url = "/api/assignments";
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

  // add an assignment for a subject, call the callback when complete
  addAssignment: function(subject, title, dueDate, expDate, cb) {
    var url = "/api/assignments";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        assignment: {
          'subject':subject,
          'title': title,
          'dueDate':dueDate,
          'expDate': expDate,
          'instructor': localStorage.name
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        console.log('succes in addAssignment in componentsAPI'); //TEMP
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
          expDate: assignment.expDate
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
    var url = "/api/assignments/"+assignment.title;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      data: {
        subject: assignment.subject
      },
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
  getStudentAssignments: function(cb) {
    var url = "/api/studentAssignments";
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

    // get the list of assignmentss by student name, call the callback when complete
  getStudentAssignmentsForInstructor: function(cb) {
    var url = "/api/studentAssignmentsForInstructor";
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
    var url = "/api/studentassignments";
    var now = new Date();
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
          completed: true,
          dateSubmitted: {now},
          student: localStorage.name,
          title: assignment.title,
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
  getSubjects: function(instructor, cb) {

    console.log('inside getSubjects instructor: ' + instructor);
    var url = "/api/subjects/"+instructor;
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

  // deleteSubject, call the callback when complete
  deleteSubject: function(name, cb) {
    var url = "/api/subjects/"+name;
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
