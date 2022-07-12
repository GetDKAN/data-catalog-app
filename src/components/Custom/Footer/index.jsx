import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from "@civicactions/data-catalog-components";

function CustomFooter({
  links, customClasses,
}) {
  const menu1 = links ? <Menu items={links.footer1} menuId="leftnav" /> : null;
  const menu2 = links ? <Menu items={links.footer2} menuId="rightnav" /> : null;

  return (
    <div className="dc-footer">
      <div className={`${customClasses} page-footer`}>
        <div className="branding">
          <h2>Portal de Datos Abiertos<br/>del Ayuntamiento de Cádiz</h2>
          <p>
            El Portal de Datos Abiertos del Ayuntamiento de Cádiz es una herramienta que pone a disposición de la ciudadanía una serie de conjuntos de datos abiertos para que puedan ser utilizados, reutilizados y redistribuidos libremente por cualquier persona.
          </p>
          <p>
            Powered by <a href="http://getdkan.com">DKAN</a>
          </p>
          <div className="social">
            <a href="https://www.facebook.com/GetDKAN/">
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com/getdkan">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://dkan.slack.com/">
              <FontAwesomeIcon
                icon={['fab', 'slack']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">Slack</span>
            </a>
            <a href="https://github.com/getdkan">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </div>
        {menu1}
        {menu2}
      </div>
    </div>
  );
}

CustomFooter.defaultProps = {
  customClasses: '',
  links: null,
};

CustomFooter.propTypes = {
  customClasses: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default CustomFooter;
