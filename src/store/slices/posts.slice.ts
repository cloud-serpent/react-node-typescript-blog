import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'types';
import { Posts } from '../types';

/* eslint-disable @typescript-eslint/no-unused-vars */
type PostState = {
  posts: Post[];
  page: number;
  list: number;
  total: number;
};

const initialState: PostState = {
  posts: [],
  page: 1,
  list: 5,
  total: 0,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    getMyPostRequest(
      state: PostState,
      action: PayloadAction<Posts.IGetMyPostRequestPayload>
    ) {
      state.posts = [];
      state.page = action.payload.page;
      state.list = action.payload.list;
    },
    getMyPostSuccess(
      state: PostState,
      action: PayloadAction<Posts.IGetMyPostSuccessPayload>
    ) {
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    },
    createPostRequest(
      state: PostState,
      action: PayloadAction<Posts.ICreateNewPostRequestPayload>
    ) {},
    createPostSuccess(
      state: PostState,
      action: PayloadAction<Posts.ICreateNewPostSuccessPayload>
    ) {
      state.posts = [action.payload.posts];
    },
    updatePostRequest(
      state: PostState,
      action: PayloadAction<Posts.IUpdatePostPayload>
    ) {},
    deletePostRequest(
      state: PostState,
      action: PayloadAction<Posts.IDeletePostPayload>
    ) {},
  },
});

export const postsActions = postsSlice.actions;

export const postsRducers = postsSlice.reducer;
