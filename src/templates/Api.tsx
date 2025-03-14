import Layout from '../components/Layout';

const Api = ({  }) => (
  <Layout title="API Documentation">
    <div className="container px-6 m-auto pt-6">
      <h1 className="text-2xl">API</h1>
      <div>
        <div>
          {/* {typeof window !== `undefined` && (
            <ApiDocs endpoint={import.meta.env.VITE_REACT_APP_ROOT_URL} />
          )} */}
        </div>
      </div>
    </div>
  </Layout>
);

export default Api;
