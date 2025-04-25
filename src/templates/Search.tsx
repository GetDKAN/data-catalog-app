import { useLocation } from "react-router-dom"
import { useSearchAPI } from "@civicactions/data-catalog-components";
import { SearchPageContext } from '../common/contexts';
import Layout from "../components/Layout";
import SearchFacets from '../components/SearchFacets';
import FulltextSearchInput from '../components/FulltextSearchInput';
import SearchPageSizeSelect from '../components/SearchPageSizeSelect';
import SearchSortSelect from '../components/SearchSortSelect';
import SearchDatasetList from '../components/SearchDatasetList';
import SearchPagination from '../components/SearchPagination';
import SearchResultsFound from "../components/SearchResultsFound";

const SearchTemplate = () => {
  const location = useLocation();
  const rootURL = import.meta.env.VITE_REACT_APP_ROOT_URL;
  const {
    data,
    status,
    error,
    facets,
    searchParams,
  } = useSearchAPI(rootURL, "recentDatasets", {"page-size": 10, sort: "modified", "sort-order": "desc"}, [])
  return (
    <Layout title="Search">
      <div className="container px-6 m-auto pt-6">
        <h1 className="text-3xl">Datasets</h1>
          <SearchPageContext.Provider value={{
            data: data,
            status: status,
            error: error,
            searchParams: {
              value: searchParams.value,
              set: searchParams.set,
              defaultParams: searchParams.defaultParams,
            },
            facets: {
              value: facets.value,
              set: facets.set,
            },
          }}>
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
        </SearchPageContext.Provider>
      </div>
    </Layout>
  )
}

export default SearchTemplate;

