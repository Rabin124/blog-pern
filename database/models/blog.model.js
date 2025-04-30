const blogModel = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    BlogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BlogContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },})
  return Blog;

}

module.exports = blogModel