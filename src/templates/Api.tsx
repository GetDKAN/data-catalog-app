import SwaggerUI from 'swagger-ui-react';
import { SpanOpenAPIVersion, SpanVersionStamp } from '@civicactions/swagger-ui-layout';
import Layout from '../components/Layout';

console.log(import.meta.env.VITE_REACT_APP_ROOT_URL)

const Api = ({  }) => (
  <Layout title="API Documentation">
    <div className="container px-6 m-auto pt-6">
      <h1 className="text-2xl">API</h1>
      <div>
        <div>
          {typeof window !== `undefined` && (
             <SwaggerUI
              url={`${import.meta.env.VITE_REACT_APP_ROOT_URL}`}
              docExpansion={'list'}
              defaultModelsExpandDepth={-1}
              plugins={[SpanOpenAPIVersion, SpanVersionStamp]}
            />
          )}
        </div>
      </div>
    </div>
  </Layout>
);

export default Api;
