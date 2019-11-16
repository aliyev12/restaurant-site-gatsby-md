import React from "react";
import logo from "../../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";
import { styles } from '../../../utils';

interface Props {
  handleNavbar: () => void;
}

export const NavbarHeader = ({ handleNavbar }: Props) => {
  return (
    <HeaderWrapper>
      <AniLink fade to="/">
        <img src={logo} alt="company name" />
      </AniLink>
      <FaAlignRight className="toggle-icon" onClick={() => handleNavbar()} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
