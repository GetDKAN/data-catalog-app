import React, { useContext } from 'react';
import { useLocation } from "react-router-dom"
import { defaultFacets, sortOptions } from '../../config/search';
import { SearchAPIWrapper, SearchAPIContext } from "@civicactions/data-catalog-components";
import Layout from "../../components/Layout";
import config from "../../assets/config";

const SearchTemplate = () => {
  const location = useLocation();
  
  return (
    <Layout title="Search">
      <div className={`dc-page ${config.container}`}>
        <h1>Datasets</h1>
        <SearchAPIWrapper rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}>
          <SearchInput />
          <DatasetList />
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
  return (
    <ul>
      {Object.keys(searchData.data.results).map((key) => (
        <DatasetListItem key={searchData.data.results[key].identifier} item={searchData.data.results[key]} />
      ))}
    </ul>
  );
}


const DatasetListItem = ({item}) => {
  return(
    <li>{item.title}</li>
  );
}
