import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './templates/home';
import About from './templates/about';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
import Publishers from './templates/publishers';
import './theme/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<SearchTemplate />} />
      <Route path="/publishers" element={<Publishers />} />
      <Route path="/api" element={<ApiDocsFull />} />
      <Route path="/dataset/:id" element={<Dataset />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
