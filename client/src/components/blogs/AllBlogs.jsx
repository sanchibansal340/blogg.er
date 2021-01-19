import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListBlogs from "./ListBlogs";
import "./blog.scss";

const AllBlogs = ({ blogs, auth }) => {
   const inputRef = useRef(null);
   const [search, setSearch] = useState("");
   const [display, setDisplay] = useState(false);

   const handleChange = e => {
      setSearch(inputRef.current.value.toLowerCase());
   };

   // setting no blog found after waiting for a second
   useEffect(() => {
      setTimeout(() => {
         if (blogs.length === 0) setDisplay(true);
      }, 1000);
   }, [blogs]);

   return (
      <React.Fragment>
         <div className="mx-3">
            <div className="nav justify-content-between mt-2 mb-2">
               {auth && (
                  <Link to="/blogs/blog/create">
                     <button className="styleBtn btn-light">
                        +
                     </button>
                  </Link>
               )}
               <form>
                  <div className="form-group">
                     <input
                        type="text"
                        placeholder="Search Blog..."
                        id="searchBar"
                        className="form-control"
                        style={{ height: 40 }}
                        ref={inputRef}
                        onChange={handleChange}
                     />
                  </div>
               </form>
            </div>
         </div>
         {blogs.length > 0 ? (
            <ListBlogs
               blogs={blogs.filter(blog =>
                  blog.title.toLowerCase().includes(search)
               )}
            />
         ) : (
            display && (
               <div
                  style={{ height: "40vh", marginTop: '8rem', marginBottom: '3rem' }}
                  className="d-flex flex-column justify-content-center align-items-center container"
               >
                  {" "}
                  <p className="text-secondary h3">No Blogs Found !</p>
               </div>
            )
         )}
      </React.Fragment>
   );
};

AllBlogs.propTypes = {
   auth: PropTypes.bool.isRequired,
   blogs: PropTypes.array.isRequired
};

export default AllBlogs;