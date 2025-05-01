const express = require("express");
const { blogs } = require("./database/connection");
const app = express();
require("./database/connection")
app.use(express.json())

app.get("/blogs",function(req,res){
  // users.findAll()
  // logic to fetch books from database
  const datas = blogs.findAll()
  res.json({
    message : "Blog fetched successfully",
    datas
  })
})

app.post("/blogs",async function(req,res){
  console.log(req.body)
  const { BlogTitle, BlogContent } = req.body
  await blogs.create({
    BlogTitle : BlogTitle, 
    BlogContent : BlogContent
  })
  console.log(BlogTitle)
  console.log(BlogContent)

  res.json({
    message: "Blog added successfully"
  })
})

app.delete("/blogs/:id",function(req,res){
    res.json({
      message : "Blog deleted successfully"
    })
})
app.patch("/blogs/:id",function(req,res){
    res.json({
      message : "Blog updated successfully"
    })
})






app.listen(3000, function () {
  console.log("project has started at port 3000");
});
