import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.div`
  background-color: #f2f8f7;
  width: 100%;
  height: 435px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0.2, 0.2, 0.2, 0.4);
`;

export const MainContent = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 100px;
  padding-right: 152px;
  padding-left: 152px;
`;

export const Copyright = styled.div`
  padding: 28px 152px;
  & div {
    text-align: center;
  }
`;

export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  &:first-child {
    max-width: 200px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: end;
  & > p {
    font-weight: 800;
  }
`;

export const Highlight = styled.p`
  background-color: #00aaa1;
  padding-left: 5px;
  font-size: 1.2em;
  color: white;
  font-weights: 500;
`;

export const HighlightText = styled.p`
  color: #00aaa1;
`;

export const ItemsGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const FollowButtonsGroup = styled.div`
  display: flex;
  flex-content: start;
  gap: 20px;
`;

export const FollowButton = styled.div`
  width: 24px;
  height: 24px;
  padding: 4px;
  border: 2px solid #777777;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    padding: 0px;
    border: none;
  }
`;
