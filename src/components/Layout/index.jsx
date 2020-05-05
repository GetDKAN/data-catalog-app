import React from "react";
import { Link } from '@reach/router';
import { Header, NavBar, Footer } from "@civicactions/data-catalog-components";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";

const Layout = ({
  children
}) => {
  return (
    <div className="App">
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
