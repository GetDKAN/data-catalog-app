import React from 'react';
import { useLocation } from "react-router-dom"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { Search, SearchSidebar, SearchContent } from "@civicactions/data-catalog-components";
import Layout from "../../components/Layout";
import config from "../../assets/config";

const SearchTemplate = () => {
  const location = useLocation();
  return (
    <Layout title="Search">
    <div className={`dc-page ${config.container}`}>
        <h1>Datasets</h1>
        <Search
          searchEndpoint={`${import.meta.env.VITE_REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={location.pathname}
          location={location}
          normalize={normalizeItems}
        >
          <div className="row">
            <SearchContent />
            <SearchSidebar />
          </div>
        </Search>
      </div>
      </Layout>
  );
}

export default SearchTemplate;
