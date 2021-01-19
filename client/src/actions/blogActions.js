import axios from "axios";
import {
   CREATE_BLOG,
   GET_BLOG,
   GET_BLOGS,
   UPDATE_BLOG,
   DELETE_BLOG,
   TOGGLE_BLOGS_LOADING,
   TOGGLE_BLOG_LOADING,
   RESET_BLOG,
   GET_ERRORS
} from "./types";

export const createBlog = (blogData, history) => dispatch => {
   dispatch(toggleBlogLoading());
   axios
      .post("http://localhost:5000/api/blogs/create", blogData)
      .then(res => {
         dispatch({
            type: CREATE_BLOG,
            payload: res.data
         });
         dispatch(toggleBlogLoading());
         history.push("/blogs");
      })
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
         });
         dispatch(toggleBlogLoading());
      });
};

export const getBlogByID = id => dispatch => {
   dispatch(toggleBlogLoading());
   axios
      .get(`http://localhost:5000/api/blogs/blog/${id}`)
      .then(res => {
         dispatch({
            type: GET_BLOG,
            payload: res.data
         });
         // dispatch(clearErrors());
         dispatch(toggleBlogLoading());
      })

      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
         dispatch(toggleBlogLoading());
      });
};

export const getBlogs = () => dispatch => {
   dispatch(toggleBlogsLoading());
   axios
      .get(`http://localhost:5000/api/blogs/`)
      .then(res => {
         dispatch({
            type: GET_BLOGS,
            payload: res.data
         });
         // dispatch(clearErrors());
         dispatch(toggleBlogsLoading());
      })
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
         dispatch(toggleBlogsLoading());
      });
};

export const updateBlog = (id, blogData, history) => dispatch => {
   dispatch(toggleBlogLoading());
   axios
      .patch(`http://localhost:5000/api/blogs/update/${id}`, blogData)
      .then(res => {
         dispatch({
            type: UPDATE_BLOG,
            payload: res.data
         });
         dispatch(toggleBlogLoading());
         history.push(`/blogs/blog/${res.data._id}`);
      })
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
         dispatch(toggleBlogLoading());
      });
};

export const deleteBlog = (id, history) => dispatch => {
   dispatch(toggleBlogLoading());
   axios
      .delete(`http://localhost:5000/api/blogs/delete/${id}`)
      .then(res => {
         dispatch({
            type: DELETE_BLOG,
            payload: id
         });
         dispatch(toggleBlogLoading());
         history.push("/blogs");
      })
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
         dispatch(toggleBlogLoading());
      });
};

export const resetBlog = () => {
   return {
      type: RESET_BLOG
   };
};

export const toggleBlogLoading = () => {
   return {
      type: TOGGLE_BLOG_LOADING
   };
};

export const toggleBlogsLoading = () => {
   return {
      type: TOGGLE_BLOGS_LOADING
   };
};