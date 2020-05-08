import React from 'react';
import config from "../../assets/config";
import { ApiDocs } from "@civicactions/data-catalog-components";

const ApiDocsFull = ({ path }) => (
  <div className={`dc-page ${config.container}`}>
    <div className="page-content">
      {typeof window !== `undefined` && (
        <ApiDocs endpoint={'http://dkan/api/1'} />
      )}
    </div>
  </div>
);

export default ApiDocsFull;
