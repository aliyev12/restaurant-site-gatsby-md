import React from 'react';

import {Layout} from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from "../utils";
import menuImg from '../images/bcg/menuBcg.jpeg';

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <PageHeader img={menuImg}>
        <Banner title="menu" subtitle={`let's look into it..`}/>
    </PageHeader>
  </Layout>
)

export default MenuPage;