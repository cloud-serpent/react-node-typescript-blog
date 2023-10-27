import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px;
  height: 100%;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 200px;
  background-color: #666;
  border-radius: 8px;
  position: relative;
`;
export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #666;
  border-radius: 8px;
  font-size: 72px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
`;
export const ImagePreview = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  z-index: 10;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PostInput = styled.input`
  border: 1px solid #94d7d3;
  border-radius: 5px;
  padding: 15px;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #94d7d3;
  }
`;

export const PostTextArea = styled.textarea`
  border: 1px solid #94d7d3;
  border-radius: 5px;
  padding-left: 15px;
  padding-top: 15px;
  font-size: 15px;
  font-weight: 500;
  max-width: 100%;
  min-width: 100%;
  height: 400px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #94d7d3;
  }
`;

export const IconButton = styled.button`
  padding: 15px;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 15px;
  border: 1px solid #94d7d3;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  color: #94d7d3;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #94d7d399;
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #94d7d3;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }
`;
