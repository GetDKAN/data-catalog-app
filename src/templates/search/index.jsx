import React from 'react';
import { useLocation } from "react-router-dom"
import { defaultFacets, sortOptions } from '../../config/search';
import { Search } from "@civicactions/data-catalog-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Layout from "../../components/Layout";
import config from "../../assets/config";

const SearchTemplate = () => {
  const location = useLocation();
  
  const { t, i18n } = useTranslation();

  return (
    <Layout title="Search">
    <div className={`dc-page ${config.container}`}>
        <h1>{t('search.title')}</h1>
        <Search 
          searchEndpoint={`${import.meta.env.VITE_REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={location.pathname}
          location={location}
        />
    </div>
    </Layout>
  )
}

export default SearchTemplate;
