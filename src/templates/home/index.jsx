import React from "react";
import { Link  } from 'react-router-dom';
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout title="Home">
      <div className="grid-container">
        <div className="usa-prose">
          <h1>Welcome to DKAN</h1>
          <p className="usa-intro">
            DKAN is an open-source data management platform. It treats data as
            content so that you can easily publish, manage, and maintain your
            open data no matter the size of your team or the level of technical
            expertise.
          </p>
          <Link className="usa-button usa-button--big" to="/search">Explore the datasets</Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
