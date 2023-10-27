import styled from 'styled-components';

export const PostItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 30px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const PostItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PostItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
`;

export const PostItemContent = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

export const PostActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
`;

export const PostDate = styled.div`
  font-size: 14px;
  font-weight: 600;
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

export const PostImg = styled.div<{ $width?: string; $height?: string }>`
  min-width: ${(props) => props.$width || '260px'};
  min-height: ${(props) => props.$height || '180px'};
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #666;
`;

export const PostImgContent = styled.img<{ $width?: string; $height?: string }>`
  max-width: ${(props) => props.$width || '260px'};
  max-height: ${(props) => props.$height || '180px'};
  border-radius: 8px;
  &::before {
    content: '';
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: ${(props) => props.$width || '260px'};
    max-height: ${(props) => props.$height || '180px'};
    background-color: #333;
  }
  background-color: #333;
`;
