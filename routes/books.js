var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db');

// GET menu 
router.get('/', (req, res) => {
  conn.query('SELECT * FROM shps_library.books', (err, rows) => {
    if (err) {
      res.render('books', { title: 'Books', books: ''});
    } else {
      console.log(rows)
      res.render('books', { title: 'Books',  books: rows});
    }
  });
});

module.exports = router;
