import React from 'react';
import Layout from "../../components/Layout";
import { ApiDocs } from "@civicactions/data-catalog-components";

const ApiDocsFull = ({ path }) => (
  <Layout title="API Documentation">
  <div className="dc-page grid-container">
    <div className="page-content">
      {typeof window !== `undefined` && (
        <ApiDocs endpoint={process.env.REACT_APP_ROOT_URL} />
      )}
    </div>
  </div>
  </Layout>
);

export default ApiDocsFull;
