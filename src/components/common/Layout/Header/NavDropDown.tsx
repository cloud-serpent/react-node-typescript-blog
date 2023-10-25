import React, { useState, ReactNode } from 'react';
import { Button, Menu, NavDropdown, MenuItem } from './styles';

interface ContentProps {
  value: string;
  menu: ReactNode[];
}

export const NavDropdownButton: React.FC<ContentProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavDropdown>
      <Button onClick={handleOpen}>{props.value}</Button>
      {open ? (
        <Menu>
          {props.menu.map((menuItem, index) => (
            <li key={index}>
              <MenuItem
                onClick={() => {
                  setOpen(false);
                }}
              >
                {menuItem}
              </MenuItem>
            </li>
          ))}
        </Menu>
      ) : null}
    </NavDropdown>
  );
};
