import React from "react";
import PropTypes from "prop-types";
import "./blog.scss";

const Blog = ({ blog }) => {
//    const blogDate = getFormattedDate(blog.date);
   return (
      <div className="Blog card-deck">
         <div className="card" style={{ border: "none" }}>
            <div className="card-body postCover">
               <div className="card-title font-weight-bold text-center p-5">{blog.title}</div>
            </div>
            <div className="card-footer">
               <small className="text-muted">{blog.snippet}</small>
            </div>
         </div>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired
};

export default Blog;