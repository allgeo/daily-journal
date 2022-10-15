
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const favicon = require('serve-favicon');

const homeStartingContent = [`Try to write every day. Set aside a few minutes every day to write. This will help you to write in your journal regularly. 
Make it easy. Keep a pen and paper handy at all times. Then when you want to write down your thoughts, you can. You can also keep a journal on your smartphone.
Write or draw whatever feels right. Your journal doesn't need to follow any certain structure. It's your own private place to discuss and create whatever you want to express your feelings. Let the words and ideas flow freely. Don't worry about spelling mistakes or what other people might think.
Use your journal as you see fit. You don't have to share your journal with anyone. If you do want to share some of your thoughts with trusted friends and loved ones, you could show them parts of your journal.`, `Simple click on the 'compose' button. Enter a title and post. Then click on the 'publish' button to. As easy as that!`]
const aboutContent = "This project uses HTML/CSS, Bootstrap, Node.js, Express, and mongoDB.";
const contactContent = "For any suggestions or inquires, fell free to contact @allgeocode@gmail.com";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(favicon(__dirname + '/public/img/favicon.ico'));

mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: [homeStartingContent],
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

    const requestedPostId = req.params.postId;

    Post.findOne({_id: requestedPostId}, function(err, post){
        res.render("post", {
        title: post.title,
        content: post.content
        });
    });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


