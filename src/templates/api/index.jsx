import React from 'react';
import config from "../../assets/config";
import Layout from "../../components/Layout";

const ApiDocsFull = () => (
  <Layout title="API Documentation">
    <div>
      <h1>API Documentation</h1>
    </div>
  </Layout>
);

export default ApiDocsFull;


// <div className={`dc-page ${config.container}`}>
//     <div className="page-content">
//       {/* {typeof window !== `undefined` && (
//         <ApiDocs endpoint={process.env.REACT_APP_ROOT_URL} />
//       )} */}
//     </div>
//   </div>