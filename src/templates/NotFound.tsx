import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <div className="container px-6 m-auto pt-6">
        <h1 className="text-2xl">Page not found.</h1>
        <p>We're sorry, we can't find the page you're looking for.</p>
      </div>
    </Layout>
  );
}

export default NotFound;
