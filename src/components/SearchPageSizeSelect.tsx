import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";

const SearchPageSizeSelect = () => {
  const searchData = useContext(SearchPageContext);
  const { pageSize } = searchData;

  return(
    <div>
      <span>Page size</span>
      <select value={pageSize.value} onChange={(event) => pageSize.set(event.target.value)}>
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  )
}

export default SearchPageSizeSelect;
