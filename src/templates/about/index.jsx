import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import config from "../../assets/config";

const About = ({ path }) => (
  <div className={`dc-page ${config.container}`}>
    <h1>About this site</h1>
    <div className="dc-page-content row">
      <div class="col-md-9 col-sm-12">
        <p>This is the default state of the DKAN data catalog.</p>
        <p>
          This tool helps create open data catalogs using React and other
          libraries.
        </p>
      </div>
      <div className="col-md-3 col-sm-12">
        <Announcement variation="info" heading="Note">
          <p>Update this about page before publishing.</p>
        </Announcement>
      </div>
    </div>
  </div>
);

export default About;
