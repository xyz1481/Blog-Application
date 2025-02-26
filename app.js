const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { checkforCookie } = require("./middleware/authentication");
const app = express();
const killPort = require("kill-port");

const UserBlog = require("./models/blog");

const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(checkforCookie("token"));
app.use(express.static(path.resolve("./public")));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
  const allBlogs = await UserBlog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRouter);
app.use("/blog", blogRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/Blog")
  .then(() => console.log("MongoDB Connected!"));

app.listen(PORT, () => console.log("Server Started"));
