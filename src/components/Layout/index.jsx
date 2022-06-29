import React from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import PrimaryHeader from '../PrimaryHeader';
import Footer from '../Footer';

const Layout = ({
  children,
  title,
  description
}) => {
  return (
    <div className="App">
      <Helmet
        title={`${title} - DKAN Demo`}
        description={description}
        generator="DKAN 2 (https://github.com/GetDKAN/dkan)"
        defer={false}
        htmlAttributes={{
          "lang": "en"
        }}
      />
      <PrimaryHeader />
      <div className="usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <main id="main-content">
              {children}
            </main>
          </div>
        </div>
      </div>
     <Footer />
    </div>
  );
};

export default Layout;
