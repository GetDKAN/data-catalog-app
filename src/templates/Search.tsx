import { useContext } from 'react';
import { useLocation } from "react-router-dom"
import { SearchAPIWrapper, SearchAPIContext } from "@civicactions/data-catalog-components";
import Layout from "../components/Layout";
import SearchListItem from "../components/SearchListItem";
import SearchFacets from '../components/SearchFacets';

const SearchTemplate = () => {
  const location = useLocation();
  return (
    <Layout title="Search">
      <div>
        <h1 className="text-2xl">Datasets</h1>
        <SearchAPIWrapper rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}>
          <SearchInput />
          <div className="grid grid-cols-4 gap-4">
            <div className="px-4">
              <SearchFacets />
            </div>
            <div className="col-span-3 pr-4">
              <DatasetList />
            </div>
          </div>
        </SearchAPIWrapper>
      </div>
    </Layout>
  )
}

export default SearchTemplate;

const SearchInput = () => {
  const searchData = useContext(SearchAPIContext);
  return(
    <div>
      <input type='text' onChange={(e) => searchData.setFulltextFn(e.target.value)} value={searchData.fulltext} />
      <button onClick={() => searchData.searchFn()} >Search</button>
    </div>
  );
}

const DatasetList = () => {
  const searchData = useContext(SearchAPIContext);
  if (searchData.status === 'pending' || searchData.data.length > 0) {
    return (<div>loading</div>)
  }
  console.log(searchData)
  return (
    <ul>
      {Object.keys(searchData.data.results).map((key) => (
        <li key={searchData.data.results[key].identifier}>
          <SearchListItem item={searchData.data.results[key]} />
        </li>
      ))}
    </ul>
  );
}


const DatasetListItem = ({item}) => {
  return(
    <li>{item.title}</li>
  );
}
