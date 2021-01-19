const express = require("express");
const router = express.Router();
const Blog = require("../../models/schema").Blog;
const passport = require("passport");
const validateBlogInput = require("../../validation/blog");


router.get(
   "/",
   (req, res) => {
      Blog.find().sort({ createdAt: -1 })
         .then(blogs => res.status(200).json(blogs))
         .catch(err =>
            res
               .status(400)
               .json({ user: "Error fetching blogs of logged in user" })
         );
   }
);

router.get("/blog/:id", (req, res) => {
   Blog.find({ _id: req.params.id })
      .then(blog => res.status(200).json(blog))
      .catch(err => res.status(400).json({ id: "Error fetching blog by id" }));
});

router.post(
   "/create",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      const blog = req.body;
      const { errors, isValid } = validateBlogInput(blog);
      if (!isValid) {
         return res.status(400).json(errors);
      }

      const newBlog = new Blog(blog);
      newBlog
         .save()
         .then(doc => {res.json(doc); res.redirect("/blogs")})
         .catch(err => console.log({ create: "Error creating new blog" }));
   }
);

router.patch(
   "/update/:id",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      const { errors, isValid } = validateBlogInput(req.body);
      if (!isValid) {
         return res.status(400).json(errors);
      }
      const { title, snippet, body } = req.body;
      Blog.findOneAndUpdate(
         { _id: req.params.id },
         { $set: { title, snippet, body } },
         { new: true }
      )
         .then(doc => res.status(200).json(doc))
         .catch(err =>
            res.status(400).json({ update: "Error updating existing blog" })
         );
   }
);

router.delete(
   "/delete/:id",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      Blog.findOneAndDelete({ _id: req.params.id })
         .then(doc => {res.status(200).json(doc); res.redirect("/blogs")})
         .catch(err =>
            res.status(400).json({ delete: "Error deleting a blog" })
         );
   }
);

module.exports = router;