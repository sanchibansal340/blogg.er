import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BlogForm from "../../components/blogs/BlogForm";
import Validate from "../../components/blogs/Validate";
import { connect } from "react-redux";
import { getBlogByID, updateBlog } from "../../actions/blogActions";

const UpdateBlogPage = ({
   errors,
   updateBlog,
   currentBlog,
   getBlogByID,
   match,
   history
}) => {
   const [blog, setBlog] = useState({
      title: "",
      snippet: "",
      body: "",
      errors: {}
   });

   useEffect(() => {
      getBlogByID(match.params.id);
   }, [match, getBlogByID]);

   // updating the local state of blog with the received blog data
   useEffect(() => {
      setBlog(blog => ({
         title: currentBlog.title,
         snippet: currentBlog.snippet,
         body: currentBlog.body,
         errors: { ...blog.errors }
      }));
   }, [currentBlog]);

   useEffect(() => {
      setBlog(blog => {
         return { ...blog, errors };
      });
   }, [errors]);

   const handleChange = e => {
      setBlog({
         ...blog,
         [e.target.name]: e.target.value
      });
   };

   const handleBlur = e => {
      const { name, value } = e.target;
      const error = { ...blog.errors, ...Validate(name, value).errors };
      setBlog({ ...blog, errors: { ...error } });
   };

   const handleSubmit = e => {
      e.preventDefault();
      const { title, snippet, body } = blog;
      updateBlog(currentBlog._id, { title, snippet, body }, history);
   };

   // to ensure that the blog is loaded otherwise we would make uncontrolled form access error
   const isBlogLoaded = () => {
      return blog.title || blog.snippet || blog.body || Object.keys(blog.errors).length > 0;
   };

   return isBlogLoaded() ? (
      <BlogForm
         blog={blog}
         onChange={handleChange}
         onBlur={handleBlur}
         onSubmit={handleSubmit}
      />
   ) : (
      <div />
   );
};

const mapStateToProps = state => ({
   currentBlog: state.blog.blog,
   errors: state.errors
});

UpdateBlogPage.propTypes = {
   currentBlog: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
   getBlogByID: PropTypes.func.isRequired,
   updateBlog: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getBlogByID, updateBlog }
)(UpdateBlogPage);