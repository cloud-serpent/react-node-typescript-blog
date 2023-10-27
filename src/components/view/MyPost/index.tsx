import React, { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import {
  Post,
  PostContainer,
  PostImg,
  PostImgContent,
  EditPost,
  PostInput,
  PostTextArea,
  UploadButton,
  Pagination,
  PageButton,
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
  return (
    <Post>
      <PostContainer>
        {posts.posts.map((item, index) => (
          <PostListItem
            attachment={item.attachment}
            title={item.title}
            body={item.body}
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
          <PageButton>{posts.page}</PageButton>
          <PageButton>{posts.page + 1}</PageButton>
          ...
          <PageButton>6</PageButton>
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
        <PostImg $width="100%">
          <PostImgContent
            src={state.attachments}
            $width="100%"
            $height="100%"
          />
          <UploadButton $rounded>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </UploadButton>
        </PostImg>
        <PostInput
          placeholder="title"
          name="title"
          onChange={handleStateChange}
          value={state.title}
        />
        <PostTextArea
          placeholder="body"
          name="body"
          onChange={handleStateChange}
          value={state.body}
        />
      </EditPost>
    </Post>
  );
};
