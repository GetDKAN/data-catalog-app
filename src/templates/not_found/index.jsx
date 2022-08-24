import React from 'react';
import Layout from '../../components/Layout';

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <div className="grid-container">
        <div className="usa-prose">
          <h1>Page not found</h1>
          <p className="usa-intro">
            We're sorry, we can't find the page you're looking for. It might
            have been removed, changed its name, or is otherwise unavailable.
          </p>
        </div>
      </div>
    </Layout>

  );
}

export default NotFound;
