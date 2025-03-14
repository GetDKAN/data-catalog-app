import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";

const SearchResultsFound = () => {
  const searchData = useContext(SearchPageContext);
  const data = searchData?.data;
  const results = data?.results

  return(
    <div className="relative md:w-40">
      {data?.total
        && (<span className="text-lg">{data.total} datasets found</span>)
      }
    </div>
  )
}

export default SearchResultsFound;
