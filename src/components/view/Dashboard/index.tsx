import React from 'react';
import {
  Container,
  DailyPostSection,
  FeaturedSection,
  PopularSection,
  MainPostSection,
  RecentlySection,
  OthersSection,
} from './styles';

export const DashboardView: React.FC = () => {
  return (
    <Container>
      <DailyPostSection>
        <FeaturedSection></FeaturedSection>
        <PopularSection></PopularSection>
      </DailyPostSection>
      <MainPostSection>
        <RecentlySection></RecentlySection>
        <OthersSection></OthersSection>
      </MainPostSection>
    </Container>
  );
};
