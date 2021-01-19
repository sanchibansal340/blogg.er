import React, { useEffect } from "react";
import ViewBlog from "../../components/blogs/ViewBlog";
import { deleteBlog, getBlogByID } from "../../actions/blogActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ViewBlogPage = ({
   auth,
   blog,
   match,
   history,
   getBlogByID,
   deleteBlog
}) => {
   useEffect(() => {
      getBlogByID(match.params.id);
   }, [match, getBlogByID]);

   const handleEdit = () => {
      history.push(`/blogs/blog/update/${blog._id}`);
   };

   const handleDelete = () => {
      deleteBlog(blog._id, history);
   };

   if (Object.keys(blog).length === 0) return <div />;
   return (
      <div className="ViewBlog">
         <ViewBlog
            blog={blog}
            auth={auth}
            onDelete={handleDelete}
            onEdit={handleEdit}
         />
      </div>
   );
};

const mapStateToProps = state => ({
   auth: state.auth.isAuthenticated,
   blog: state.blog.blog
});

ViewBlogPage.propTypes = {
   auth: PropTypes.bool.isRequired,
   blog: PropTypes.object.isRequired,
   getBlogByID: PropTypes.func.isRequired,
   deleteBlog: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getBlogByID, deleteBlog }
)(ViewBlogPage);