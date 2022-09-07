import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './theme/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const Home = lazy(() => import('./templates/home'));
const About = lazy(() => import('./templates/about'));
const DatasetSearch = lazy(() => import('./templates/DatasetSearch'));
const Publishers = lazy(() => import('./templates/publishers'))
const DatasetPage = lazy(() => import('./templates/DatasetPage'))
const FilteredResource = lazy(() => import('./templates/FilteredResource'))
const ApiDocsFull = lazy(() => import('./templates/api'))
const NotFound = lazy(() => import('./templates/not_found'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<DatasetSearch />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/api" element={<ApiDocsFull />} />
        <Route path="/dataset/:id" element={<DatasetPage />} />
        <Route path="/dataset/:id/:idx" element={<FilteredResource />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
