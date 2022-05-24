var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db');

// GET menu 
router.get('/', function(req, res) {
  conn.query('SELECT * FROM shps_library.books', (err, rows) => {
    if (err) {
      res.render('books', { title: 'Books', books: ''[0] });
    } else {
      res.render('books', { title: 'Books',  books: rows[0]});
    }
  });
});



module.exports = router;
