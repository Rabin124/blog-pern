const { blogs } = require("../database/connection")


exports.fetchBlogs =async function(req,res){
  // users.findAll()
  // logic to fetch books from database
  const datas =await blogs.findAll()
  res.json({
    message : "Blog fetched successfully",
    datas
  })
}

exports.addBlog = async function(req,res){
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
}

exports.deleteBlog = function(req,res){
  res.json({
    message : "Blog deleted successfully"
  })
}

exports.editBlog =function(req,res){
  res.json({
    message : "Blog updated successfully"
  })
}


exports.singleFetchBlog = async function(req,res){
  const id = req.params.id
  const datas = await blogs.findByPk(id)
  res.json({
    message : "Blog fetched successfully",
    datas
  })
}