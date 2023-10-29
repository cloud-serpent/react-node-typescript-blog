import { MyPostView, WithLayout } from 'components';
import React from 'react';

const MyPost: React.FC = () => {
  return <MyPostView />;
};

export const MyPostPage = WithLayout(MyPost);
