import React from 'react';
import {
  Header,
  NavButtonsGroup,
  WebsiteTitle,
  ControlButtonsGroup,
  Highlight,
  HighlightText,
  NavButton,
  ControlButton,
  ControlLink,
  ImageIcon,
  ToggleSwitch,
} from './styles';

import { NavDropdownButton } from './NavDropDown';
import { PATH } from 'consts';
import { categories, pages } from 'config';

export const HeaderSection: React.FC = () => {
  const categoriesMenu = categories;
  const pageMenu = pages;

  return (
    <Header>
      <NavButtonsGroup className="dropdown">
        <NavButton to={PATH.DASHBOARD}>Homepage</NavButton>
        <NavButton to={PATH.ABOUT}>About</NavButton>
        <NavDropdownButton value="Categories" menu={categoriesMenu} />
        <NavDropdownButton value="Pages" menu={pageMenu} />
      </NavButtonsGroup>
      <WebsiteTitle>
        <Highlight>Note</Highlight>
        <p>Book</p>
        <HighlightText>.</HighlightText>
      </WebsiteTitle>
      <ControlButtonsGroup>
        <ControlButton>
          <ImageIcon src="imgs/search_small.png"></ImageIcon>
        </ControlButton>
        <ControlButton>
          <ImageIcon src="imgs/extend_small.png"></ImageIcon>
        </ControlButton>
        <ControlLink to={PATH.NOT_FOUND}>
          <div>Contact</div>
        </ControlLink>
        <ToggleSwitch />
      </ControlButtonsGroup>
    </Header>
  );
};
