import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";
import Img from "gatsby-image";

export const Product = ({ product }) => {
  console.log("product = ", product);
  const {
    id,
    frontmatter: { image, ingredients, name, price },
  } = product;
  const { fixed } = image.childImageSharp;
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">
          {ingredients
            .map((el, i, arr) => `${el.name}${i < arr.length - 1 ? ", " : ""}`)
            .join("")}
        </p>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  .img {
    border-radius: 0.5rem;
  }

  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
`;
