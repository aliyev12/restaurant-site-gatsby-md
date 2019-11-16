import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { styles, Section } from "../../utils";
import Img from "gatsby-image";

const ALL_IMAGES = graphql`
  query {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export const Gallery = () => {
  const { getImages } = useStaticQuery(ALL_IMAGES);
  const titles = {
    "img-1": "awesome pizza",
    "img-2": "awesome burger",
    "img-3": "awesome steak",
  };

  return (
    <Section>
      <GalleryWrapper>
        {getImages.edges.map((edge, i) => (
          <div className={`item item-${i + 1}`} key={edge.node.id}>
            <Img fluid={edge.node.childImageSharp.fluid} />
            <p className="info">{titles[edge.node.name]}</p>
          </div>
        ))}
      </GalleryWrapper>
    </Section>
  );
};

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`;
