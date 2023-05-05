import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import todoAPISlice from "./todo-api-slice";
import postsApiSlice from "./posts-api-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todoAPISlice.reducerPath]: todoAPISlice.reducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(todoAPISlice.middleware)
      .concat(postsApiSlice.middleware);
  },
});

export const { useFetchTodosQuery } = todoAPISlice;
export const {
  useFetchPostsQuery,
  useFetchCommentsQuery,
  useFetchAlbumsQuery,
  useFetchPhotosQuery,
} = postsApiSlice;

export default store;
