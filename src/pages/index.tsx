import React from "react";
import { HomeHeader, Banner, BannerButton } from "../utils";
import img from "../images/bcg/homeBcg.jpeg";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Layout } from "../components/layout";
import SEO from "../components/seo";
import { QuickInfo, Gallery, Menu } from "../components/HomePageComponents";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
        <AniLink fade to="/menu" style={{textDecoration: 'none'}}>
          <BannerButton customStyles={{ margin: "2rem auto" }}>
            menu
          </BannerButton>
        </AniLink>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
);

export default IndexPage;
