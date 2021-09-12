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
