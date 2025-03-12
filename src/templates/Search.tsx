import { useLocation } from "react-router-dom"
import { SearchAPIWrapper } from "@civicactions/data-catalog-components";
import { SearchPageContext } from '../common/contexts';
import Layout from "../components/Layout";
import SearchFacets from '../components/SearchFacets';
import FulltextSearchInput from '../components/FulltextSearchInput';
import SearchPageSizeSelect from '../components/SearchPageSizeSelect';
import SearchSortSelect from '../components/SearchSortSelect';
import SearchDatasetList from '../components/SearchDatasetList';
import SearchPagination from '../components/SearchPagination';

function getSortOrder(sort) {
  return sort === "title" ? "asc" : "desc";
}

const SearchTemplate = () => {
  const location = useLocation();
  return (
    <Layout title="Search">
      <div>
        <h1 className="text-2xl">Datasets</h1>
        <SearchAPIWrapper
          customQueryKey="searchpage"
          location={location}
          CustomContext={SearchPageContext}
          rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}
          options={{
            facetKeys: ["publisher__name", "theme", "keyword"],
            getSortOrder: getSortOrder
          }}
        >
          <FulltextSearchInput />
          <div className="grid grid-cols-4 gap-4">
            <div className="px-4">
              <SearchFacets />
            </div>
            <div className="col-span-3 pr-4">
              <SearchSortSelect />
              <SearchDatasetList />
              <SearchPageSizeSelect />
              <SearchPagination />
            </div>
          </div>
        </SearchAPIWrapper>
      </div>
    </Layout>
  )
}

export default SearchTemplate;

