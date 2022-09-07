import React from 'react';
import { Link } from 'react-router-dom';
import DKANLogo from '../../assets/DKANLogo';

const PrimaryHeader = () => {
  return(
    <header className="usa-header usa-header--basic dkan-header">
        <div className="usa-nav-container">
          <div className="dkan-header--site-identification">
            <div className="usa-logo dkan-logo" id="-logo">
              <em className="usa-logo__text">
                <Link to="/" title="DKAN Open Data Catalog">
                  <DKANLogo fill="#ffffff" />
                </Link>
              </em>
            </div>
            <div>
              <span className="dkan-site-name text-bold">Open Data Catalog</span>
              <span className="dkan-site-slogan">Your slogan here.</span>
            </div>
          </div>
          <nav aria-label="Primary navigation" className="usa-nav">
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item dkan-header--nav-link">
               <Link to="/search">
                  <span>Datasets</span>
               </Link>
              </li>
              <li className="usa-nav__primary-item dkan-header--nav-link">
               <Link to="/about">
                  <span>About</span>
               </Link>
              </li>
              <li className="usa-nav__primary-item dkan-header--nav-link">
               <Link to="/publishers">
                  <span>Publishers</span>
               </Link>
              </li>
              <li className="usa-nav__primary-item dkan-header--nav-link">
               <Link to="/api">
                  <span>API</span>
               </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default PrimaryHeader;
