const express = require("express");
const app = express();
require("./database/connection")

app.get("/blogs",function(req,res){
  users.findAll()
  res.json({
    // logic to fetch books from database
    message : "Blog fetched successfully"
  })
})

app.post("/blogs",function(req,res){
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
