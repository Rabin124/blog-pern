const express = require("express");
const blogRoute = require("./routes/blogRoute")
const app = express();
require("./database/connection")
app.use(express.json())


app.use("/api/",blogRoute)


app.listen(3000, function () {
  console.log("project has started at port 3000");
});
