import { Types } from "./actionTypes";

export const fetchPosts = ({ page, limit }) => {
  return {
    type: Types.FETCH_POSTS,
    successType: Types.FETCH_POSTS_SUCCESS,
    failedType: Types.FETCH_POSTS_FAILED,
    isEndpointCall: true,
    endpoint: `posts?_limit=${limit}&_page=${page}`,
    method: "GET",
  };
};

export const deletePost = (id) => {
  return {
    type: Types.DELETE_POSTS,
    successType: Types.DELETE_POSTS_SUCCESS,
    failedType: Types.DELETE_POSTS_FAILED,
    isEndpointCall: true,
    endpoint: `posts/${id}`,
    method: "DELETE",
    reduxData: { id },
  };
};
