import React from "react";
import styled from "styled-components";
import { styles } from "../../../utils";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { IconType } from "react-icons/lib/cjs";

interface Icon {
  id: number;
  icon: any;
  path: string;
}

const navIcons: Icon[] = [
  {
    id: 1,
    icon: <FaFacebook className="icon facebook-icon" />,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaTwitter className="icon twitter-icon" />,
    path: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaInstagram className="icon instagram-icon" />,
    path: "https://www.instagram.com",
  },
];

export const NavbarIcons = () => {
  return (
    <IconWrapper>
      {navIcons.map(item => {
        return (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        );
      })}
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transObject({})};
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`;
