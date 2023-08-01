const express = require('express');
const router = express.Router();
const {
  createBlog,
  allBlogs,
  editBlog,
  deleteBlog,
} = require('../controller/blogsController');

router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Express' });
});
router.get('/all-blogs', allBlogs);
router.post('/new-blog', createBlog);
router.put('/edit/:id', editBlog);
router.delete('/delete/:id', deleteBlog)

module.exports = router;
