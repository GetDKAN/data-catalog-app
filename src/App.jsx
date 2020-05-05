import React from 'react';
import { Router, Link } from "@reach/router";
import Home from './templates/home';
import SearchTemplate from './templates/search';
import Layout from './components/Layout';
import "@civicactions/data-catalog-components/dist/index.css";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, fas);


function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <SearchTemplate path="/search" />
      </Router>
    </Layout>
  );
}

export default App;
