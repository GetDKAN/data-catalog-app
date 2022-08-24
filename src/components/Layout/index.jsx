import React from "react";
import Helmet from "react-helmet";
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
      <div className="default-container">
        <main id="main-content" className="main-content padding-top-2">
          {children}
        </main>
      </div>
     <Footer />
    </div>
  );
};

export default Layout;
