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
      {data?.total
        && (<span className="my-3 block">{data.total} datasets found</span>)
      }
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

