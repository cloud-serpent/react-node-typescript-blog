import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px 152px;
  width: 100%;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    padding: 75px 125px;
  }
  @media screen and (max-width: 900px) {
    padding: 50px 100px;
    flex-direction: column;
  }
`;

export const EditPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  gap: 10px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-start;
  row-gap: 5px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const IButton = styled.button<{ $rounded?: boolean }>`
  background: #fff;
  border: none;
  border-radius: ${(props) => (props.$rounded ? '50%' : '5px')};
  padding: ${(props) => (props.$rounded ? '5px' : '2px')};
  margin: ${(props) => (props.$rounded ? '5px' : '0px')};
  box-shadow: 1px 1px 1px #333;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 1px 1px 5px #333;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  gap: 10px;
`;

export const PageButton = styled.button<{ $selected?: boolean }>`
  border: 1px solid #94d7d3;
  border-radius: 8px;
  padding: 2px;
  background-color: ${(props) => (props.$selected ? '#94D7D3' : '#fff')};
  color: ${(props) => (props.$selected ? '#fff' : '#94D7D3')};
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: 500;
  &:hover {
    box-shadow: 5px 5px 5px #333;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 18px;
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
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid #94d7d3;
  border-radius: 26px;
  background-color: transparent;
  cursor: pointer;
  color: #94d7d3;
  transition: all 0.2s ease-in-out;
  margin-right: 0px;

  &:hover {
    background-color: #94d7d399;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const EditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  gap: 10px;
`;

export const DeleteModal = styled.div``;
