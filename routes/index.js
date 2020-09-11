var express = require('express');
var router = express.Router();
var bodyParser   = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restful_blog_app', {useNewUrlParser: true , useUnifiedTopology: true});

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date , default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

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

router.get("/blogs/new", function(req, res) {
  //just render the same form over and over - easiest route
  res.render("new"); 
});

module.exports = router;
