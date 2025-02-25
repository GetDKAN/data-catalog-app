import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <div>
        <h1 className="text-2xl">Page not found.</h1>
        <p>We're sorry, we can't find the page you're looking for.</p>
      </div>
    </Layout>
  );
}

export default NotFound;
