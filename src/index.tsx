import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';
import { ThemeContext } from "./common/contexts";
import Home from './templates/Home';
import SearchTemplate from './templates/Search';
import About from "./templates/About";
import Api from './templates/Api';
import NotFound from './templates/NotFound';
import Dataset from './templates/Dataset';
// import ApiDocsSpecific from './templates/dataset/api';
import Publishers from './templates/Publishers';

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
    element: <Api />
  },
  {
    path: "/dataset/:id",
    element: <Dataset />
  },
  // {
  //   path: "/dataset/:id/api",
  //   element: <ApiDocsSpecific />
  // },
  {
    path: '*',
    element: <NotFound />,
  },
]);
const rootDiv = document.getElementById("root");


createRoot(rootDiv).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
