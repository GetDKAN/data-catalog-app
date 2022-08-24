import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../../components/Layout';
import FilteredResourceBody from './FilteredResourceBody';

const FilteredResource = () => {
  const params = useParams();
  const queryClient = new QueryClient()
  const { id, idx } = params;
  return(
    <Layout title={`Filtered Resource - `}>
      <div className="grid-container">
        <Link to={`/dataset/${id}`}>Back to dataset</Link>
        <QueryClientProvider client={queryClient}>
          <FilteredResourceBody id={id} idx={idx}/>
        </QueryClientProvider>
      </div>
    </Layout>

  )
}

export default FilteredResource;
