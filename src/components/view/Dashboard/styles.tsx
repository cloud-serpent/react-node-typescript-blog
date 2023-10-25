import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.h1``;

export const GoToLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const DailyPostSection = styled.div``;
export const FeaturedSection = styled.div``;
export const PopularSection = styled.div``;
export const MainPostSection = styled.div``;
export const RecentlySection = styled.div``;
export const OthersSection = styled.div``;
