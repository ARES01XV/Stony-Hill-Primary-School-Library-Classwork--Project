var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db');

// GET admin 
router.get('/', function(req, res) {
  conn.query('SELECT * FROM shps_library.requests, students WHERE requests.student_id = students.student_id', (err, rows) => {
    if (err) {
      res.render('admin', { title: 'Admin', requests: '', students: ''});
    } else {
      res.render('admin', { title: 'Admin',  requests: rows, students: rows});
    }
  });
});

// delete
// router.get('/delete/:admin_id', function(req, res) {
//   conn.query('DELETE FROM shps_library.requests WHERE admin_id =' + req.body.admin_id, (err, rows) => {
//     if (err) {
//       res.render('admin', { title: 'Admin', requests: '' });
//     } else {
//       res.render('admin', { title: 'Admin',  requests: rows});
//     }
//   });
// });

// Get Update EJS
// router.get('/update/:admin_id', function(req, res) {
//   conn.query('SELECT * FROM shps_library.requests', (err, rows) => {
//     if (err) {
//       res.render('admin-edit', { title: 'Admin', requests: '' });
//     } else {
//       res.render('admin-edit', { title: 'Admin',  requests: rows[0]});
//     }
//   });
// });

// Post update
  
// router.post('/post', (req, res) => {
//   const data = {
//     admin_id: req.body.admin_id,
//     admin_name: req.body.admin_name,
//     admin_password: req.body.admin_password
//   }

//   conn.query('UPDATE shps_library.admin SET ? WHERE admin_id =' + req.body.admin_id, data, (err, rows) => {
//     if(err) throw err
//       res.redirect('/admin');
//   });
// });



module.exports = router;
