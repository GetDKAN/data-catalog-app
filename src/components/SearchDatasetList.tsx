import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import SearchListItem from "./SearchListItem";

const SearchDatasetList = () => {
  const searchData = useContext(SearchPageContext);
  // if (searchData.status === 'pending' || searchData.data.length > 0) {
  //   return (<div>loading</div>)
  // }
  const data = searchData?.data;
  const results = data?.results

  return (
    <div>
      <ul>
        {results && Object.keys(results).map((key) => (
          <li key={searchData.data.results[key].identifier}>
            <SearchListItem item={searchData.data.results[key]} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchDatasetList;

