import React from "react";
import styled from "styled-components";
import img from "../images/bcg/homeBcg.jpeg";

interface Props {
  img: any;
  children: any;
}

const PageHeader = ({ img, children }: Props) => {
  return <DefaultHeader img={img}>{children}</DefaultHeader>;
};

const HomeHeader = ({ img, children }: Props) => {
  return <IndexHeader img={img}>{children}</IndexHeader>;
};

const IndexHeader = styled.header<{ img: any }>`
  min-height: calc(100vh - 55.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ img }) => img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultHeader = styled(IndexHeader)<{ img: any }>`
  min-height: 60vh;
`;

HomeHeader.defaultProps = {
  img,
};

PageHeader.defaultProps = {
  img,
};

export { HomeHeader, PageHeader };
