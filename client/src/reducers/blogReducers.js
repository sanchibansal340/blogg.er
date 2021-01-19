import {
    RESET_BLOG,
    CREATE_BLOG,
    GET_BLOG,
    GET_BLOGS,
    UPDATE_BLOG,
    DELETE_BLOG,
    TOGGLE_BLOGS_LOADING,
    TOGGLE_BLOG_LOADING
 } from "../actions/types";
 
 const initialState = {
    blog: {},
    blogs: [],
    blogLoading: false,
    blogsLoading: false
 };
 
const blogReducers = (state = initialState, action) => {
    switch (action.type) {
       case CREATE_BLOG:
          return {
             ...state,
             blogs: [...state.blogs, action.payload]
          };
       case GET_BLOGS:
          return {
             ...state,
             blog: {},
             blogs: [...action.payload]
          };
       case GET_BLOG:
          return {
             ...state,
             blog: { ...action.payload[0] }
          };
       case UPDATE_BLOG:
          const blogs = state.blogs.filter(
             blog => blog._id !== action.payload._id
          );
          return {
             ...state,
             blog: {},
             blogs: [...blogs, action.payload]
          };
       case DELETE_BLOG:
          return {
             ...state,
             blogs: state.blogs.filter(blog => blog._id !== action.payload)
          };
       case TOGGLE_BLOG_LOADING:
          return {
             ...state,
             blogLoading: !state.blogLoading
          };
       case TOGGLE_BLOGS_LOADING:
          return {
             ...state,
             blogsLoading: !state.blogsLoading
          };
       case RESET_BLOG:
          return initialState;
       default:
          return state;
    }
}

export default blogReducers;