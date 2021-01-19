import React from "react";
import PropTypes from "prop-types";

const BlogForm = ({ blog, onChange, onBlur, onSubmit }) => {
   const { title, snippet, body, errors } = blog;
   return (
      <div className="container"  style={{ marginTop: '8rem' }}>
         <div className="row">
            <div className="col mx-auto">
               <div className="form-group">
                    <form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                        <input
                            name="title"
                            type="text"
                            placeholder="Enter Blog Title"
                            value={title}
                            onChange={onChange}
                            onBlur={onBlur}
                            text={{
                                module: "blog",
                                label: "Title",
                                error: errors.title
                            }}
                            className="form-control mb-4"
                        />
                        <input
                            name="snippet"
                            type="text"
                            placeholder="Enter a 1-liner"
                            value={snippet}
                            onChange={onChange}
                            onBlur={onBlur}
                            text={{
                                module: "blog",
                                label: "snippet",
                                error: errors.snippet
                            }}
                            className="form-control mb-4"
                        />
                        <textarea
                            name="body"
                            placeholder="Write your blog here..."
                            value={body}
                            onChange={onChange}
                            onBlur={onBlur}
                            text={{
                                module: "blog",
                                label: "Description",
                                error: errors.body
                            }}
                            className="form-control mb-5"
                        />
                        <button
                            type="submit"
                            className="mt-3 btn btn-danger"
                        >
                            Submit
                        </button>
                    </form>
               </div>
            </div>
         </div>
      </div>
   );
};

BlogForm.propTypes = {
   blog: PropTypes.object.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default BlogForm;