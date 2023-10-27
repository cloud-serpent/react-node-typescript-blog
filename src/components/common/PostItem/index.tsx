import React, { MouseEventHandler } from 'react';
import {
  PostItem,
  PostImg,
  PostImgContent,
  PostItemContainer,
  PostItemTitle,
  PostItemContent,
  PostActionContainer,
  PostDate,
  IButton,
} from './style';
import { Post } from 'types';
import { Pass, Pending, Block, Calendar, Edit, Delete } from 'assets/svg';

interface PostItemProps extends Post {
  onEdit: MouseEventHandler;
}

export const PostListItem: React.FC<PostItemProps> = ({
  attachment,
  title,
  body,
  status,
  createdAt,
  onEdit,
  id,
}) => {
  return (
    <PostItem>
      <PostImg>
        <PostImgContent src={attachment} />
      </PostImg>
      <PostItemContainer>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemContent>{body}</PostItemContent>
        <PostActionContainer>
          {status == 'PASSED' ? (
            <Pass />
          ) : status == 'PENDING' ? (
            <Pending />
          ) : (
            <Block />
          )}
          <Calendar />
          <PostDate>{createdAt}</PostDate>
          <IButton onClick={onEdit} id={String(id)}>
            <Edit id={String(id)} />
          </IButton>
          <IButton>
            <Delete />
          </IButton>
        </PostActionContainer>
      </PostItemContainer>
    </PostItem>
  );
};
