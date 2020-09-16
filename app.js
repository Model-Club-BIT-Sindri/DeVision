var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var port = process.env.PORT || 8080;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose');

var app = express();
// mongodb+srv://modelclub2k19:model2k19club@cluster0.t0m2j.mongodb.net/Blog?retryWrites=true&w=majority

// mongoose.connect('mongodb://modelclub2k19:model2k19club@cluster0-shard-00-00.t0m2j.mongodb.net:27017,cluster0-shard-00-01.t0m2j.mongodb.net:27017,cluster0-shard-00-02.t0m2j.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-10yvmo-shard-0&authSource=admin&retryWrites=true&w=majority', {
//   useNewUrlParser: true , 
//   useUnifiedTopology: true
// }).then(()=>{
//   console.log("Connection.db! Successful");
// }).catch(err => {
//   console.log('ERROR:', err.message);
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// //Mongoose Model config
// var blogSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   body: String,
//   created: {type: Date , default: Date.now}
// });

// var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title:"Test Blog",
//   image: "https://drive.google.com/file/d/1aX67_EtDIegixeMVI1NUGufjKqMlL1Nc/view?usp=sharing",
//   body: "lorem uhfjsjklsxhlsvkbcl"
// });

//restflu routes

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// app.listen(port, function() {
//   console.log('Our app is running on http://localhost:' + port);
// });

module.exports = app;
