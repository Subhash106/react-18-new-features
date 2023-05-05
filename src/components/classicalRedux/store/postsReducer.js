import { INITIATE_POSTS, POSTS_FAILED, POSTS_SUCCESS } from "./actions";

const initialState = {
  status: "idle",
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_POSTS:
      return { ...state, status: "loading" };
    case POSTS_SUCCESS:
      return { ...state, status: "idle", posts: action.posts };
    case POSTS_FAILED:
      return { ...state, status: "idle", error: action.error };
    default:
      return state;
  }
};

export default postsReducer;
