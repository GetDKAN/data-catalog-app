import React from 'react';
import config from "../../assets/config";
import { ApiDocs } from "@civicactions/data-catalog-components";

const ApiDocsFull = ({ path }) => (
  <div className={`dc-page ${config.container}`}>
    <div className="page-content">
      {typeof window !== `undefined` && (
        <ApiDocs endpoint={process.env.REACT_APP_ROOT_URL} />
      )}
    </div>
  </div>
);

export default ApiDocsFull;
