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

// import search_small from 'assets/imgs/search_small.png';
// import extend_small from 'assets/imgs/extend_small.png';

export const HeaderSection: React.FC = () => {
  const homepageMenu = ['Menu1', 'Menu2'];
  const categoriesMenu = ['Category1', 'Category2', 'Category3'];
  const pageMenu = ['Page1', 'Page2', 'Page3', 'Page4'];

  return (
    <Header>
      <NavButtonsGroup className="dropdown">
        <NavDropdownButton value="Homepages" menu={homepageMenu} />
        <NavButton to={PATH.NOT_FOUND}>About</NavButton>
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
