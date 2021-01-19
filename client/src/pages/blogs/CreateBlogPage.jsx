import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BlogForm from "../../components/blogs/BlogForm";
import Validate from "../../components/blogs/Validate";
import { connect } from "react-redux";
import { createBlog } from "../../actions/blogActions";

const CreateBlogPage = ({ errors, createBlog, loading, history }) => {
   const [blog, setBlog] = useState({
      title: "",
      snippet: "",
      body: "",
      errors: {}
   });

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
      createBlog({ title, snippet, body }, history);
   };

   return (
      <BlogForm
         blog={blog}
         onChange={handleChange}
         onBlur={handleBlur}
         onSubmit={handleSubmit}
      />
   );
};

const mapStateToProps = state => ({
   errors: state.errors
});

CreateBlogPage.propTypes = {
   createBlog: PropTypes.func.isRequired,
   errors: PropTypes.object.isRequired,
};

export default connect(
   mapStateToProps,
   { createBlog }
)(CreateBlogPage);