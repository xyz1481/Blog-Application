const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const UserBlog = require("../models/blog");
const Comment = require("../models/comment");
const router = Router();

const timestamp = Date.now();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${timestamp}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/new-one", (req, res) => {
  return res.render("blog", {
    user: req.body,
  });
});

router.get("/:id", async (req, res) => {
  const blog = await UserBlog.findById(req.params.id).populate("createdBy"); //what does populate do ?
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );
  console.log("BLOG", blog);
  console.log("COMMENTS", comments);
  console.log("USERBLOG", UserBlog);
  return res.render("readBlog", {
    user: req.user,
    blog,
    comments,
  });
});

router.post("/comment/:blogId", async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});

router.post("/create", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  console.log(req.body);
  await UserBlog.create({
    title,
    body,
    createdBy: req.user._id, //where did this user come from ?
    coverImageURL: `/uploads/${timestamp}-${req.file.originalname}`,
  });
  return res.redirect("/");
});

module.exports = router;
