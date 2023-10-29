import { CreatePostView, WithLayout } from 'components';
import { FC } from 'react';

export const CreatePost: FC = () => {
  return <CreatePostView />;
};

export const CreatePostPage = WithLayout(CreatePost);
