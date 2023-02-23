const express = require('express');
const router = express.Router();

//instantiate mongodb 
const dbo = require('../conn')

 /* GET users listing. */
router.get('/', function(req, res, next) {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection('sample_blogs')
      .find({})
      .limit(5)
      .toArray(function(err, result){
        if (err) {
            res.status(400).send("error fetching blogs")
        } else {
            res.json(result)
        }
      })

    res.json({success: true, route: "blogs", message:"welcome to the blogs page"});
  });

/*
  //1. sample blogs listing http response
router.get('/all', function(req, res, next){
    res.json({success: true, blogs: sampleBlogs,});
});

//2. GET/blogs/single/:blog, get single title
router.get('/single/:title', function(req, res, next){
    //res.send(res.json(sampleBlogs))
    const singleBlog = sampleBlogs.find((blog)=>{
        return blog.title === req.params.title
    })
    res.json({
        success: true,
        blog: singleBlog
    });
});

//DELETE route with a single route param blogTitleToDelete
router.delete('/delete/:title',function (req, res, next){
    const blogTitleToDelete = req.params.title

    const blogIndex = sampleBlogs.findIndex((blog)=>{
        return blog.title === blogTitleToDelete
    })
    sampleBlogs.splice(blogIndex, 1)
    res.json({
        success: true
    })
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({success: true, route: "blogs", message:"welcome to the blogs page"});
  });
  */

module.exports = router;

