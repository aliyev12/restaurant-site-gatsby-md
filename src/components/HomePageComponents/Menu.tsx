import React from "react";
import { Product } from "./Product";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Section, Title, SectionButton } from "../../utils";

const MENU_ITEMS = graphql`
  query MENU_ITEMS {
    menuItems: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            name: title
            price
            ingredients {
              name
            }
          }
        }
      }
    }
  }
`;

export const Menu = () => {
  const { menuItems } = useStaticQuery(MENU_ITEMS);
  const products = menuItems.edges;
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        {products.map((item, i) => (
          <Product key={item.node.id} product={item.node} />
        ))}
      </ProductList>
    </Section>
  );
};

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;
