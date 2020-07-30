import React from 'react';
import { useLocation } from "@reach/router"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { Search, SearchSidebar, SearchContent } from "@civicactions/data-catalog-components";
import config from "../../assets/config";

const SearchTemplate = ({path}) => {
  const location = useLocation();
  return (
    <div className={`dc-page ${config.container}`}>
        <h1>Datasets</h1>
        <Search
          searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={path}
          location={location}
          normalize={normalizeItems}
        >
          <div className="row">
            <SearchContent />
            <SearchSidebar />
          </div>
        </Search>
      </div>
  );
}

export default SearchTemplate;
