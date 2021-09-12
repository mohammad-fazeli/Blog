import { Types } from "../actions/actionTypes";

const initState = {
  eroor: null,
  posts: [],
  fetching: false,
  count: 0,
};
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_POSTS_SUCCESS:
      const {
        // eslint-disable-next-line no-unused-vars
        headers: { "x-total-count": count },
      } = action;
      return {
        ...state,
        count,
        fetching: false,
        posts: action.data,
      };
    case Types.FETCH_POSTS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default postReducer;
