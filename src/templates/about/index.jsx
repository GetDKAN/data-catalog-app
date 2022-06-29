import React from "react";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const About = () => (
    <Layout title="About">
      <div className="usa-prose">
        <h1>About</h1>
        <div className="usa-alert usa-alert--warning">
          <div className="usa-alert__body">
            <p className="usa-alert__text">Update this about page before publishing.</p>
          </div>
        </div>
        <p className="usa-intro">This is the default state of the DKAN data catalog.</p>
        <p> This tool helps create open data catalogs using React and other libraries.</p>
      </div>
    </Layout>
);

export default About;
