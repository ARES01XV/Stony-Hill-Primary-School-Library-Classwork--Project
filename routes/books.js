var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db');

// GET Books 
router.get('/', (req, res) => {
  if(req.session.loggedin === true){
    conn.query('SELECT * FROM shps_library.books', (err, rows) => {
    if (err) {
      res.render('books', { title: 'Books', books: ''});
    } else {
      // console.log(rows)
      res.render('books', { title: 'Books',  books: rows});
    }
  });
  } else {
    res.redirect('/student_login')
  }
});

// Log Out
router.get('/', (req, res) => {
  req.session.destroy();
  res.redirect('/student_login')
});

module.exports = router;
