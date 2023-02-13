//instantiate stardard libraries
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//setup router for each set of routes
// importing from routes/ folder
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');

//instantiate the actual express app
const port = 3001;
const app = express();

// view engine setup
// sets environment variables (things we can access across the application)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//associating the libraries with the apps
//adding middleware
//(adding libraries that we can use throughout our application)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//for hosting static files: css, html, images, etc.
app.use(express.static(path.join(__dirname, 'public'))); 

//we bind the routers to routes to routes in our application
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);

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

//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}/`)
//})

module.exports = app;

