import React from "react";
import Helmet from "react-helmet";
import { Link } from '@reach/router';
import { Header, NavBar, Footer } from "@civicactions/data-catalog-components";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";

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
      <Header site={config.site} slogan={config.slogan} customClasses={config.container} />
      <NavBar
        navItems={links.main.map(item => (
          <Link activeClassName="active" to={item.url}>
            {item.label}
          </Link>
        ))}
        customClasses={config.container}
      />
      <main>
        {children}
      </main>
      <Footer links={links} customClasses={config.container} />
    </div>
  );
};

export default Layout;
