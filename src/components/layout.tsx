import React, { ReactChildren, PropsWithChildren } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./globals/navbar/Navbar";
import { Footer } from "./globals/Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --mainBlue: rgba(65, 65, 245, 0.502);
  }

  body {
    font-family: "Roboto", sans-serif;
    color: #262626;
    background: #fff;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
