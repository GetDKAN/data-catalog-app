import React from 'react';
import { useSearchAPI, separateFacets } from '@civicactions/data-catalog-services';
import {
  DatasetSearchCards,
  DatasetSearchFulltext,
  DatasetSearchSort,
  DatasetSearchFacetBlock
} from '@civicactions/data-catalog-components';
import Layout from "../../components/Layout";

const SearchPage = () => {
  const {
    items,
    facets,
    updateSelectedFacets,
    setSort,
    fulltext,
    setFulltext
  } = useSearchAPI(process.env.REACT_APP_ROOT_URL, {})
  const { theme, keyword, publisher__name } = separateFacets(facets); 
  return (
    <Layout title="Search">
      <div className="dc-page grid-container">
        <h1>Datasets</h1>
        <div className="grid-row">
          <div className="grid-col-9">
            <DatasetSearchFulltext fulltextValue={fulltext} updateText={setFulltext} />
            <DatasetSearchCards items={items} />
          </div>
          <div className="grid-col-3">
            <DatasetSearchSort sortUpdate={setSort} />
            <form className="usa-form">
              <DatasetSearchFacetBlock facets={theme} title="Topics" clickFn={updateSelectedFacets}/>
              <DatasetSearchFacetBlock facets={keyword} title="Tags" clickFn={updateSelectedFacets} />
              <DatasetSearchFacetBlock facets={publisher__name} title="Publishers" clickFn={updateSelectedFacets} />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SearchPage;
