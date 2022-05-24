var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

router.get('/', function(req, res, next) {
  res.render('student_login'  );
});

// Student Login
router.post('/login', function(req, res, next) {
       
  var email = req.body.email;
  var password = req.body.password;
 
  conn.query('SELECT * FROM shps_library.students WHERE email = ? AND BINARY password = ?', [email, password], function(err, results, fields) {
       
    // if login is incorrect or not found
    // console.log(results.length);
    if (results.length <= 0) {
        req.flash('error', 'Invalid credentials Please try again!')
        res.redirect('/student_login')
    }
    else { // if login found
        //Assign session variables based on login credentials                
        req.session.loggedin = true;
        req.session.tid = results[0].id,
        req.session.firstNm = results[0].firstNm;
        req.session.lastNm = results[0].lastNm;
        req.session.meal_description = results[0].meal_description;
        res.redirect('/books');
        console.log(req.session.tid)
    }            
  })
})

// Logout user
// router.get('/logout', function (req, res) {
//   req.session.destroy();
//   req.flash('success', 'Enter Your Login Credentials');
//   res.redirect('/login/login');
// });

module.exports = router;