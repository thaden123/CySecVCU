var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var news = require('./routes/news');
var resources = require('./routes/resources')
var contact = require('./routes/contact')
var leadership = require('./routes/leadership')
var programs = require('./routes/programs')
var bounty = require('./routes/programs/bounty')
var capturetheflag = require('./routes/programs/capturetheflag')
var auditgroup = require('./routes/programs/auditgroup')
var secplus = require('./routes/programs/secplus')
var events = require('./routes/events')
var hSpace = require('./routes/hSpace')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/news', news);
app.use('/resources', resources);
app.use('/contact', contact);
app.use('/leadership', leadership);
app.use('/programs', programs);
app.use('/programs/bounty', bounty);
app.use('/programs/capturetheflag', capturetheflag);
app.use('/programs/auditgroup', auditgroup);
app.use('/programs/secplus', secplus);
app.use('/events', events);
app.use('/hSpace', hSpace);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
