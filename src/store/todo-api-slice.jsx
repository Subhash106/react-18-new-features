import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoAPISlice = createApi({
  reducerPath: "todoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders(headers) {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTodos: builder.query({
        query(start = 0, limit = 10) {
          return `/todos?_start=${start}&_limit=${limit}`;
        },
      }),
    };
  },
});

export default todoAPISlice;
