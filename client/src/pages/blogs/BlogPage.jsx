import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AllBlogs from "../../components/blogs/AllBlogs";
import { getBlogs } from "../../actions/blogActions";

const BlogPage = ({
   isAuthenticated,
   getBlogs,
   blogs
}) => {
   useEffect(() => {
      getBlogs();
   }, [getBlogs]);

   return <AllBlogs blogs={blogs} auth={isAuthenticated} />;
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   blogs: state.blog.blogs
});

BlogPage.propTypes = {
   blogs: PropTypes.array.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   getBlogs: PropTypes.func.isRequired,
};

export default connect(
   mapStateToProps,
   { getBlogs }
)(BlogPage);