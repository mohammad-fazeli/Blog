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

export const addPost = (postObject) => {
  return {
    type: Types.ADD_POSTS,
    successType: Types.ADD_POSTS_SUCCESS,
    failedType: Types.ADD_POSTS_FAILED,
    isEndpointCall: true,
    endpoint: `posts`,
    method: "POST",
    data: postObject,
  };
};

export const addPosstAndFetch = (postObject, filter, toast) => {
  return (dispatch) => {
    dispatch(addPost(postObject))
      .then((response) => {
        if (response.status === 201) {
          dispatch(fetchPosts(filter));
          toast.success("Add Successful ");
        }
      })
      .catch(() => {
        toast.error("Add Failed");
      });
  };
};

export const editPostAndFetch = (postObject, filter, toast) => {
  return (dispatch) => {
    dispatch(editPost(postObject))
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchPosts(filter));
          toast.success("Edit Successful ");
        }
      })
      .catch(() => {
        toast.error("Edit to delete");
      });
  };
};

export const deletePostAndFetch = (id, filter, toast) => {
  return (dispatch) => {
    dispatch(deletePost(id))
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchPosts(filter));
          toast.success("Delete successfully");
        }
      })
      .catch(() => {
        toast.error("Deletion Failed");
      });
  };
};

export const fetchPostsAndShowToast = (filter, toast) => {
  return (dispatch) => {
    dispatch(fetchPosts(filter))
      .then()
      .catch(() => {
        toast.error("Failed to get information", {
          position: "top-center",
        });
      });
  };
};
