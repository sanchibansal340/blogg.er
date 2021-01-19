import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import "./blog.scss";

const ViewBlog = ({ blog, auth, onDelete, onEdit }) => {
   return (
      <div className="viewPost container" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
         <div className="row mb-5">
            <Link to="/blogs" className="btn mb-3">
               <i className="material-icons left mr-2">
                  keyboard_backspace
               </i> 
               Back
            </Link>
            <div className="ml-auto">
               {auth && (
                  <div className="buttons">
                     <div className="col-12 text-center">
                        <button
                           className="mr-2 btn btn-outline-info"
                           onClick={onEdit}
                        >
                           <i className="material-icons">edit</i>
                        </button>
                        <button onClick={onDelete} className="btn btn-outline-danger">
                           <i className="material-icons">delete</i>
                        </button>
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className="row">
            <div className="text-center postTitle col-12">
               <h2>{blog.title}</h2>
               <p className="text-muted">
                  {blog.snippet}
               </p>
            </div>
         </div>
         <div className="my-4 row" style={{ whiteSpace: "pre-wrap" }}>
            <div className="col-12">{blog.body}</div>
         </div>
      </div>
   );
};

ViewBlog.propTypes = {
   blog: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewBlog;