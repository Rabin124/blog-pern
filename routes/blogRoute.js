const { fetchBlogs, addBlog, deleteBlog, editBlog, singleFetchBlog } = require("../controllers/blogController");


const router = require("express").Router();

router.route("/blogs").get(fetchBlogs).post(addBlog)
router.route("/blogs/:id").delete(deleteBlog).patch(editBlog).get(singleFetchBlog)


module.exports = router