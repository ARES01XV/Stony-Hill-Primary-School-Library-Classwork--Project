var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var session = require('express-session')
var flash = require('express-flash')

var logger = require('morgan');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var student_loginRouter = require('./routes/student_login');
var adminRouter = require('./routes/admin');
var admin_loginRouter = require('./routes/admin_login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session Settings
app.use(cookieParser());
app.use(cookieParser());
app.use(session({ 
    secret: 'secREt$#code$%3245',
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 990000 }
    cookie: { maxAge: 3600000 }
}))

app.use(flash());

app.use('/', indexRouter);
app.use('/books', booksRouter); 
app.use('/student_login', student_loginRouter);
app.use('/admin', adminRouter); 
app.use('/admin_login', admin_loginRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
