import React, { ChangeEvent, useState } from 'react';
import {
  PostContainer,
  PostHeader,
  PostInput,
  PostTextArea,
  ImageUploadWrapper,
  ImagePreview,
  FileInput,
  UploadLabel,
  IconButton,
} from './style';
import { AppActions, useAppDispatch } from 'store';
import { useNavigate } from 'react-router-dom';

export const CreatePostView: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    body: '',
    attachments: '',
  });

  const [image, setImage] = useState<File | null>(null);
  const [show, setShow] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      const date = new Date(Date.now());
      const saveAs = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${
        file.name
      }`;
      reader.onloadend = () => {
        setState({ ...state, attachments: saveAs });
        setShow(reader.result as string);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const selectClear = () => {
    setImage(null);
    setShow('');
    setState({ ...state, attachments: '' });
  };

  const handleStateChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const callback = () => {
    setState({ ...state, title: '', body: '', attachments: '' });
    selectClear();
  };

  const dispatch = useAppDispatch();

  const createPost = () => {
    dispatch(AppActions.upload.uploadRequest({ avatar: image }));
    dispatch(AppActions.posts.createPostRequest({ ...state, callback }));
  };

  return (
    <PostContainer>
      <PostHeader>
        <ImageUploadWrapper>
          {show && (
            <ImagePreview src={show} alt="Preview" onClick={selectClear} />
          )}
          <UploadLabel htmlFor="image-upload">+</UploadLabel>
          <FileInput
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </ImageUploadWrapper>
        <PostInput
          name="title"
          placeholder="Title"
          onChange={handleStateChange}
          value={state.title}
        />
        <IconButton onClick={createPost}>+ Create Post</IconButton>
      </PostHeader>
      <PostTextArea
        name="body"
        placeholder="Enter the content..."
        onChange={handleStateChange}
        value={state.body}
      />
    </PostContainer>
  );
};
