import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryHeader = () => {
  return(
    <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="-logo">
              <em className="usa-logo__text">
                <Link to="/" title="DKAN">DKAN</Link>
              </em>
            </div>
          </div>
          <nav aria-label="Primary navigation" className="usa-nav">
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
               <Link to="/search" className="usa-nav__primary-item">
                  <span>Datasets</span>
               </Link>
              </li>
              <li className="usa-nav__primary-item">
               <Link to="/about" className="usa-nav__primary-item">
                  <span>About</span>
               </Link>
              </li>
              <li className="usa-nav__primary-item">
               <Link to="/publishers" className="usa-nav__primary-item">
                  <span>Publishers</span>
               </Link>
              </li>
              <li className="usa-nav__primary-item">
               <Link to="/api" className="usa-nav__primary-item">
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
