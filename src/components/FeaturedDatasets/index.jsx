import React from "react";
import PropTypes from "prop-types";
import excerpts from 'excerpts';
import { Link } from '@reach/router';
import { Text } from "@civicactions/data-catalog-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import config from "../../assets/config";
import './featureddatasets.scss';

const FeaturedDatasets = ({ datasets }) => {
  const { t } = useTranslation();

  return (
    <div className={`dc-featured-datasets ${config.container}`}>
      <h2 className="dc-featured-title">{t('home.featured')}</h2>
      <ol>
        {datasets.map((item) => (
          <li>
            <Link to={`dataset/${item.identifier}`} key={item.identifier}>
              <h3>{item.title}</h3>
            </Link>
            <Text>
              {excerpts(item.description, {words: 35})}
            </Text>
          </li>
        ))}
      </ol>
    </div>
  );
};

FeaturedDatasets.propTypes = {
  datasets: PropTypes.arrayOf(PropTypes.object)
};

export default FeaturedDatasets;
