import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {  useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import DatasetPageBody from "./DatasetPageBody";

const DatasetPage = () => {
  const params = useParams();
  const queryClient = new QueryClient()
  return (
    <Layout title={`Dataset - `}>
      <div className="grid-container">
        <QueryClientProvider client={queryClient}>
          <DatasetPageBody id={params.id}/>
        </QueryClientProvider>
      </div>
    </Layout>
  );
};

export default DatasetPage;
