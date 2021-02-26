import React from "react";
import PropTypes from "prop-types";
import excerpts from 'excerpts';
import { Link } from '@reach/router';
import { Text } from "@civicactions/data-catalog-components";
import './featureddatasets.scss';

const FeaturedDatasets = ({ datasets }) => {
  return (
    <div className="dc-featured-datasets grid-container">
      <h2 className="dc-featured-title">Featured Datasets</h2>
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
