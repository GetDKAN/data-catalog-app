import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";


const SearchSortSelect = () => {
  const searchData = useContext(SearchPageContext);
  const { sort } = searchData;

  return(
    <select value={sort.value} onChange={(event) => sort.set(event.target.value)}>
      <option value="modified">Date</option>
      <option value="title">Alphabetical</option>
    </select>
  )
  
}

export default SearchSortSelect;
