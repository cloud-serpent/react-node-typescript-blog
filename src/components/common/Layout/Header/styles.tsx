import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #e8f3f3;
  padding: 24px 152px 19px 152px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 4px rgba(0.2, 0.2, 0.2, 0.4);
`;

export const NavButtonsGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled(Link)`
  margin-right: 50px;
  text-decoration: none;
  color: black;
  &: hover {
    cursor: pointer;
  }
`;

export const NavDropdown = styled.div`
  margin-right: 50px;
  position: relative;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const WebsiteTitle = styled.div`
  display: flex;
  align-items: end;
  margin-right: auto;
  margin-left: auto;
`;

export const ControlButtonsGroup = styled.div`
  display: flex;
  align-items: center;
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

export const Button = styled.div`
  display: block;
`;

export const Menu = styled.ul`
  position: absolute;

  list-style-type: none;
  margin: 5px 0px;
  padding: 0px;

  border: none;
  width: 100px;

  & > li {
    margin: 0;

    background-color: white;
  }

  &>li: hover {
    background-color: lightgray;
  }
  display: block;
  z-index: 1;
`;

export const MenuItem = styled.div`
  width: 100%;
  &: hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

export const ImageIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const ControlButton = styled.div`
  margin-left: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const ControlLink = styled(Link)`
  margin-left: 50px;
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  color: black;
`;

export const ToggleSwitch: React.FC = () => {
  const [switchState, setSwitchState] = useState(true);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('---', e.target.checked);
    setSwitchState(!switchState);
  }
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
};

const StyledLabel = styled.label<{ checked: boolean }>`
  margin-left: 50px;
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
  background: ${({ checked }) => (checked ? 'black' : 'gray')};
  display: block;
  border-radius: 10px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '2px' : 'calc(55% - 1px)       ')};
    top: 2px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 10px;
    transition: 0.3s;
  }
`;
