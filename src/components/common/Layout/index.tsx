import React from 'react';
import { FooterSection } from './Footer';
import { HeaderSection } from './Header';
import { LayoutContainer, ContentSection } from './styles';

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderSection />
      <ContentSection>{children}</ContentSection>
      <FooterSection />
    </LayoutContainer>
  );
};

export const WithLayout = (InputComponent: any) => () => {
  return (
    <LayoutComponent>
      <InputComponent />
    </LayoutComponent>
  );
};
