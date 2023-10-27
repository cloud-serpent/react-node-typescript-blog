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
  posts: [
    {
      attachment: '/imgs/bg (1).jpg',
      title:
        "I Created a Developer Rap Video - Here's What I Learned from it. Check it out",
      body: 'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp',
      status: 'PENDING',
      createdAt: '10-26-2022',
      id: '1',
    },
    {
      attachment: '/imgs/bg (2).jpg',
      title:
        "I Created a Developer Rap Video - Here's What I Learned from it. Check it out",
      body: 'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp',
      status: 'PENDING',
      createdAt: '10-26-2022',
      id: '1',
    },
    {
      attachment: '/imgs/bg (3).jpg',
      title:
        "I Created a Developer Rap Video - Here's What I Learned from it. Check it out",
      body: 'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp',
      status: 'PENDING',
      createdAt: '10-26-2022',
      id: '1',
    },
    {
      attachment: '/imgs/bg (4).jpg',
      title:
        "I Created a Developer Rap Video - Here's What I Learned from it. Check it out",
      body: 'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp',
      status: 'PENDING',
      createdAt: '10-26-2022',
      id: '1',
    },
    {
      attachment: '/imgs/bg (5).jpg',
      title:
        "I Created a Developer Rap Video - Here's What I Learned from it. Check it out",
      body: 'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp',
      status: 'PENDING',
      createdAt: '10-26-2022',
      id: '1',
    },
  ],
  page: 1,
  list: 0,
  total: 5,
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
    },
    createPostRequest(
      state: PostState,
      action: PayloadAction<Posts.ICreateNewPostRequestPayload>
    ) {
      return;
    },
    createPostSuccess(
      state: PostState,
      action: PayloadAction<Posts.ICreateNewPostSuccessPayload>
    ) {},
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
