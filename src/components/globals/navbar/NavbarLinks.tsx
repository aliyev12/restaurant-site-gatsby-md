import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { styles } from "../../../utils";

interface Props {
  navbarOpen: boolean;
}

interface Link {
  id: number;
  path: string;
  name: string;
}

const navLinks: Link[] = [
  {
    id: 0,
    path: "/",
    name: "home",
  },
  {
    id: 1,
    path: "/about",
    name: "about",
  },
  {
    id: 2,
    path: "/menu",
    name: "menu",
  },
  {
    id: 3,
    path: "/contact",
    name: "contact",
  },
];

export const NavbarLinks = ({ navbarOpen }: Props) => {
  const [links, setLinks] = React.useState(navLinks);

  return (
    <LinkWrapper open={navbarOpen}>
      {links.map(item => {
        return (
          <li key={item.id}>
            <AniLink fade to={item.path} className="nav-link">
              {item.name}
            </AniLink>
          </li>
        );
      })}
    </LinkWrapper>
  );
};

const LinkWrapper = styled.ul<{ open: boolean }>`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${({ open }: { open: boolean }): string => (open ? "152px" : "0")};
  overflow: hidden;
  ${styles.transObject({ time: "1s", type: 'linear' })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;
