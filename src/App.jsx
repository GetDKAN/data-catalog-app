import React from 'react';
import { Router } from "@reach/router";
import Home from './templates/home';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
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
        <NotFound default />
        <Home path="/" />
        <SearchTemplate path="/search" />
        <ApiDocsFull path="/api" />
      </Router>
    </Layout>
  );
}

export default App;
