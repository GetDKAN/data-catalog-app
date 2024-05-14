import React from 'react';
import { createRoot } from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';
import '@civicactions/data-catalog-components/dist/index.css';
import './theme/index.css';

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
    path: "/home",
    element: <Navigate replace to="/" />
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
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
