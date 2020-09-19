var express = require('express');
var router = express.Router();
var bodyParser   = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://modelclub2k19:model2k19club@cluster0-shard-00-00.t0m2j.mongodb.net:27017,cluster0-shard-00-01.t0m2j.mongodb.net:27017,cluster0-shard-00-02.t0m2j.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-10yvmo-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true , 
  useUnifiedTopology: true
}).then(()=>{
  console.log("Connection.db! Successful");
}).catch(err => {
  console.log('ERROR:', err.message);
});

//Mongoose Model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date , default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title:"Test Blog",
//   image: "https://drive.google.com/file/d/1aX67_EtDIegixeMVI1NUGufjKqMlL1Nc/view?usp=sharing",
//   body: "lorem uhfjsjklsxhlsvkbcl"
// });


// var Blog = mongoose.model("Blog", blogSchema);

/* GET home page. */
router.get('/', function(req, res ){
  res.redirect("/blogs");
})

router.get('/blogs', function(req, res, next) {
  Blog.find({},function(err, blogs){
    if(err){
      console.log("Error!")
    }else {
      res.render('index', { blogs: blogs });
    }
  });
});

router.get('/blogs/contact', function(req, res, next) {
  Blog.find({},function(err, blogs){
    if(err){
      console.log("Error!")
    }else {
      res.render('contact', { blogs: blogs });
    }
  });
});


router.get("/blogs/new", function(req, res) {
  //just render the same form over and over - easiest route
  res.render("new"); 
});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// var bodyParser   = require("body-parser");
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://modelclub2k19:model2k19club@cluster0-shard-00-00.t0m2j.mongodb.net:27017,cluster0-shard-00-01.t0m2j.mongodb.net:27017,cluster0-shard-00-02.t0m2j.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-10yvmo-shard-0&authSource=admin&retryWrites=true&w=majority', {
//   useNewUrlParser: true , 
//   useUnifiedTopology: true
// }).then(()=>{
//   console.log("Connection.db! Successful");
// }).catch(err => {
//   console.log('ERROR:', err.message);
// });

// //Mongoose Model config
// var blogSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   body: String,
//   created: {type: Date , default: Date.now}
// });

// var Blog = mongoose.model("Blog", blogSchema);

// // Blog.create({
// //   title:"Test Blog",
// //   image: "https://drive.google.com/file/d/1aX67_EtDIegixeMVI1NUGufjKqMlL1Nc/view?usp=sharing",
// //   body: "lorem uhfjsjklsxhlsvkbcl"
// // });


// // var Blog = mongoose.model("Blog", blogSchema);

// /* GET home page. */
// router.get('/', function(req, res ){
//   res.redirect("/blogs");
// })

// router.get('/blogs', function(req, res, next) {
//   Blog.find({},function(err, blogs){
//     if(err){
//       console.log("Error!")
//     }else {
//       res.render('index', { blogs: blogs });
//     }
//   });
// });

// router.get("/blogs/new", function(req, res) {
//   //just render the same form over and over - easiest route
//   res.render("new"); 
// });

// module.exports = router;
