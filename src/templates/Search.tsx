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
import SearchResultsFound from "../components/SearchResultsFound";
import { getSortOrder } from "../common/functions";

const SearchTemplate = () => {
  const location = useLocation();
  return (
    <Layout title="Search">
      <div className="container px-6 m-auto pt-6">
        <h1 className="text-3xl">Datasets</h1>
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
          
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4">
              <SearchFacets />
            </div>
            <div className="col-span-4 lg:col-span-8">
              <div className="flex sm:flex-col md:flex-row justify-between items-center sm:items-start md:items-center">
                <SearchResultsFound />
                <div className="flex sm:flex-col md:flex-row">
                  <SearchSortSelect />
                  <SearchPageSizeSelect />
                </div>
              </div>
              <div className="md:px-2 mb-3 border-b-1 mb-5 ">
                <FulltextSearchInput />
              </div>
              
              <SearchDatasetList />
              <div className="flex items-center justify-center">
                <SearchPagination />
              </div>
              
            </div>
          </div>
        </SearchAPIWrapper>
      </div>
    </Layout>
  )
}

export default SearchTemplate;

