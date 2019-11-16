import React from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { styles } from "../../utils";

export const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          similique debitis doloremque sapiente officia voluptate, omnis eaque
          numquam voluptatem! Accusamus, ad. Praesentium commodi aperiam, est
          error minima quo sequi quaerat.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat similique debitis doloremque sapiente officia
          voluptate, omnis eaque numquam voluptatem! Accusamus, ad. Praesentium
          commodi aperiam, est error minima quo sequi quaerat.
        </p>
        <AniLink fade to="/about" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
        </AniLink>
      </QuickInfoWrapper>
    </Section>
  );
};

const QuickInfoWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;
