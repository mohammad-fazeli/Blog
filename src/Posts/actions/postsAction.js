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

export const editPost = (postObject) => {
  return {
    type: Types.EDIT_POSTS,
    successType: Types.EDIT_POSTS_SUCCESS,
    failedType: Types.EDIT_POSTS_FAILED,
    isEndpointCall: true,
    endpoint: `posts/${postObject.id}`,
    method: "PATCH",
    data: postObject,
  };
};

export const editPostAndFetch = (postObject, filter) => {
  return (dispatch) => {
    dispatch(editPost(postObject)).then((response) => {
      if (response.status === 200) {
        dispatch(fetchPosts(filter));
      }
    });
  };
};

export const deletePostAndFetch = (id, filter) => {
  return (dispatch) => {
    dispatch(deletePost(id)).then((response) => {
      if (response.status === 200) {
        dispatch(fetchPosts(filter));
      }
    });
  };
};
