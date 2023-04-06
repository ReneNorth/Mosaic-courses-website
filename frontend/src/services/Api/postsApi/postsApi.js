import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1/api/v1/blog/' }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
