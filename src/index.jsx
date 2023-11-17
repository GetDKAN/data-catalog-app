import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './theme/index.css';
import '@civicactions/data-catalog-components/dist/index.css'

import Home from './templates/home';
import About from './templates/about';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
import Publishers from './templates/publishers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/publishers",
    element: <Publishers />
  },
  {
    path: "/search",
    element: <SearchTemplate />
  },
  {
    path: "/api",
    element: <ApiDocsFull />
  },
  {
    path: "/dataset/:id",
    element: <Dataset />
  },
  {
    path: "/dataset/:id/api",
    element: <ApiDocsSpecific />
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
