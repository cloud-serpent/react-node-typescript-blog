import React, { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import {
  Post,
  PostContainer,
  EditPost,
  PostInput,
  PostTextArea,
  Pagination,
  PageButton,
  IconButton,
  PostHeader,
  ImageUploadWrapper,
  ImagePreview,
  UploadLabel,
  FileInput,
  EditContainer,
} from './style';
import { PostListItem } from 'components/common';
import { RootState, useAppSelector } from 'store';

export const MyPostView: React.FC = () => {
  const posts = useAppSelector((state: RootState) => state.posts);
  const [state, setState] = useState({
    attachments: '',
    body: '',
    title: '',
  });
  const handleStateChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleEdit = (e: BaseSyntheticEvent) => {
    const index = Number(e.target.id);
    console.log(e.target);
    setState({
      attachments: posts.posts[index].attachment || '',
      title: posts.posts[index].title,
      body: posts.posts[index].body,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState({ ...state, attachments: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const selectClear = () => {
    setState({ ...state, attachments: '' });
  };
  return (
    <Post>
      <PostContainer>
        {posts.posts.map((item, index) => (
          <PostListItem
            attachment={item.attachment}
            title={item.title.slice(0, 40) + '...'}
            body={item.body.slice(0, 100) + '...'}
            status={item.status}
            createdAt={item.createdAt}
            id={String(index)}
            key={index}
            onEdit={handleEdit}
          />
        ))}
        <Pagination>
          <PageButton>
            <svg
              width="46px"
              height="46px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#94D7D3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g fill="#94D7D3" fillRule="nonzero">
                  {' '}
                  <path d="M358.989 657.36h51.154V366.64H358.99zM631.348 656.96l36.118-36.29L559.112 511.8l108.354-108.87-36.118-36.29L486.875 511.8z"></path>{' '}
                </g>{' '}
              </g>
            </svg>
          </PageButton>
          {posts.page > 1 ? <PageButton>{posts.page - 1}</PageButton> : ''}
          <PageButton $selected>{posts.page}</PageButton>
          <PageButton>{posts.page + 1}</PageButton>
          ...
          <PageButton>{posts.total}</PageButton>
          <PageButton>
            <svg
              width="46px"
              height="46px"
              fill="#94D7D3"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M562.19 511.799l-144.6 145.718-36.15-36.43L489.89 511.8l-108.45-109.29 36.15-36.429zM691.2 657.92H640V366.08h51.2z"></path>
              </g>
            </svg>
          </PageButton>
        </Pagination>
      </PostContainer>
      <EditPost>
        <PostHeader>
          <EditContainer>
            <ImageUploadWrapper>
              {state.attachments && (
                <ImagePreview
                  src={state.attachments}
                  alt="Preview"
                  onClick={selectClear}
                />
              )}
              <UploadLabel htmlFor="image-upload">+</UploadLabel>
              <FileInput
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ImageUploadWrapper>
            <IconButton>+ Edit Post</IconButton>
          </EditContainer>
          <PostInput
            name="title"
            placeholder="Title"
            onChange={handleStateChange}
            value={state.title}
          />
        </PostHeader>
        <PostTextArea
          name="body"
          placeholder="Enter the content..."
          onChange={handleStateChange}
          value={state.body}
        />
      </EditPost>
    </Post>
  );
};
