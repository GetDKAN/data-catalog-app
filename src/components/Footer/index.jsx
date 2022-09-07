import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav" aria-label="Footer navigation">
          <ul className="grid-row grid-gap">
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a
                className="usa-footer__primary-link"
                href="https://docs.getdkan.com/">
                  Documentation
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a
                className="usa-footer__primary-link"
                href="https://github.com/getdkan/dkan">
                  Download
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a
                className="usa-footer__primary-link"
                href="https://project-open-data.cio.gov/">
                 Project Open Data
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a
                className="usa-footer__primary-link"
                href="https://www.w3.org/TR/vocab-dcat/">
                  DCAT
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a
                className="usa-footer__primary-link"
                href="https://drupal.org/">
                  Drupal
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a
                className="usa-footer__primary-link"
                href="http://opensourceopendata.org/">
                  Open Source Open Data
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div
              className="
                usa-footer__logo
                grid-row
                mobile-lg:grid-col-6 mobile-lg:grid-gap-2
              "
            >
              <div className="mobile-lg:grid-col-auto">
                <img className="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="" />
              </div>
              <div className="mobile-lg:grid-col-auto">
                <p className="usa-footer__logo-heading">Open Source Open Data</p>
                <p>
                  We can only realize the full power of open data when the tools
                  used for its collection, publishing and analysis are also open
                  and transparent.
                </p>
                <p>Powered by DKAN</p>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              {/* <div class="usa-footer__social-links grid-row grid-gap-1">
                <div class="grid-col-auto">
                  <a class="usa-social-link" href="javascript:void(0);"
                    ><img
                      class="usa-social-link__icon"
                      src="/assets/img/usa-icons/facebook.svg"
                      alt="Facebook"
                  /></a>
                </div>
                <div class="grid-col-auto">
                  <a class="usa-social-link" href="javascript:void(0);"
                    ><img
                      class="usa-social-link__icon"
                      src="/assets/img/usa-icons/twitter.svg"
                      alt="Twitter"
                  /></a>
                </div>
                <div class="grid-col-auto">
                  <a class="usa-social-link" href="javascript:void(0);"
                    ><img
                      class="usa-social-link__icon"
                      src="/assets/img/usa-icons/youtube.svg"
                      alt="YouTube"
                  /></a>
                </div>
                <div class="grid-col-auto">
                  <a class="usa-social-link" href="javascript:void(0);"
                    ><img
                      class="usa-social-link__icon"
                      src="/assets/img/usa-icons/instagram.svg"
                      alt="Instagram"
                  /></a>
                </div>
              </div>*/}
              <a href="https://civicactions.com/" className="usa-footer__contact-heading">CivicActions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;