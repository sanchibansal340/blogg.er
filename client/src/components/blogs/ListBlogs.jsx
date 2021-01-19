import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import PropTypes from "prop-types";
import "./blog.scss";

const ListBlog = ({ blogs }) => {
   return (
      <div className="grid-container mx-3">
         {blogs.map(blog => (
            <Link to={`/blogs/blog/${blog._id}`} key={blog._id}>
               <Blog blog={blog} />
            </Link>
         ))}
      </div>
   );
};

ListBlog.propTypes = {
   blogs: PropTypes.array.isRequired
};

export default ListBlog;