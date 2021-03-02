import React from 'react';
import { Router } from "@reach/router";
import HomePage from './templates/HomePage';
import AboutPage from './templates/AboutPage';
import SearchPage from './templates/SearchPage';
import ApiDocsFull from './templates/api';
import NotFoundPage from './templates/NotFoundPage';
import DatasetPage from './templates/DatasetPage';
import ApiDocsSpecific from './templates/dataset/api';
import PublishersPage from './templates/PublishersPage';
import './theme/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <Router>
      <NotFoundPage default />
      <HomePage path="/" />
      <AboutPage path="/about"/>
      <PublishersPage path="/publishers" />
      <SearchPage path="/search" />
      <ApiDocsFull path="/api" />
      <DatasetPage path="/dataset/:id" />
      <ApiDocsSpecific path="/dataset/:id/api" />
    </Router>
  );
}

export default App;
