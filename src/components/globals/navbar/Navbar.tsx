import React from "react";
import { NavbarHeader } from "./NavbarHeader";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarIcons } from "./NavbarIcons";
import styled from 'styled-components';

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={() => setOpen(o => !o)}/>
      <NavbarLinks navbarOpen={open}/>
      <NavbarIcons />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;