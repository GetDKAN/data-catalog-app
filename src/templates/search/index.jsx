import React from 'react';
import { useLocation, Link } from "react-router-dom"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { useSearchAPI, separateFacets } from '@civicactions/data-catalog-services';
import Layout from "../../components/Layout";
import config from "../../assets/config";

const rootUrl = "https://demo.getdkan.org/api/1";

const SearchTemplate = ({additionalParams}) => {
  const location = useLocation();

  const {
    fulltext,
    selectedFacets,
    loading,
    items,
    sort,
    totalItems,
    facets,
    updateSelectedFacets,
    setFulltext,
    setSort,
    sortOrder,
    setSortOrder,
    setPage,
    pageSize,
    page,
    resetFilters,
  } = useSearchAPI(
    rootUrl,
    {
      // ...transformUrlParamsToSearchObject(location.search, ['theme', 'keyword'], defaultSort),
    },
    additionalParams
  );

  return (
    <Layout title="Search">
     <div className={`dc-page ${config.container}`}>
       <h1>Datasets</h1>
       <ul className="usa-collection">
        {items.map((item) => (
          <li className="usa-collection__item" key={item.identifier}>
            <div className="usa-collection__body">
              <h3 className="usa-collection__heading">
                <Link className="usa-link" to={`/dataset/${item.identifier}`}>{item.title}</Link>
              </h3>
              {item.theme.map((t) => <span key={t} className="usa-tag">{t}</span>)}
              <div className="usa-collection__description">
                <p>{item.description}</p>
              </div>
              <ul className="usa-collection__meta" aria-label="More information">
                <li className="usa-collection__meta-item">
                  By {item.publisher.name}
                </li>
                <li className="usa-collection__meta-item">
                  <time datetime={item.modified}>{item.modified}</time>
                </li>
              </ul>
              <ul className="usa-collection__meta" aria-label="Topics">
                {item.keyword.map((t) => <li key={t} className="usa-collection__meta-item usa-tag">{t}</li>)}
              </ul>
            </div>
          </li>
        ))}

       </ul>
        {/* <Search
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
        </Search> */}
      </div>
    </Layout>
  );
}

export default SearchTemplate;
