const Blog = require('../model/Blog');

const createBlog = async (req, res) => {
  try {
    const newBlog = await new Blog(req.body);
    const saveBlog = await newBlog.save();
    res.status(200).json({ success: true, data: saveBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const allBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;

    req.body.lastModified = Date.now();

    const updateBlog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updateBlog });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, data: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, data: deleteBlog });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, data: error.message });
  }
};

module.exports = {
  createBlog,
  allBlogs,
  editBlog,
  deleteBlog,
};
