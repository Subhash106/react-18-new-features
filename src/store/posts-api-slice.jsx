import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApiSlice = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders(headers) {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      fetchPosts: builder.query({
        query(start = 0, limit = 10) {
          return `/posts?_start=${start}&_limit=${limit}`;
        },
      }),
      fetchComments: builder.query({
        query(postId, start = 0, limit = 10) {
          return `/posts/${postId}/comments?_start=${start}&_limit=${limit}`;
        },
      }),
      fetchPhotos: builder.query({
        query(start = 0, limit = 10) {
          return `/photos?_start=${start}&_limit=${limit}`;
        },
      }),
      fetchAlbums: builder.query({
        query(start = 0, limit = 10) {
          return `/albums?_start=${start}&_limit=${limit}`;
        },
      }),
    };
  },
});

export default postsApiSlice;
