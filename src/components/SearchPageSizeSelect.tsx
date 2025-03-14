import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import { selectClasses } from "../theme/tailwindClasses";

const SearchPageSizeSelect = () => {
  const searchData = useContext(SearchPageContext);
  const { pageSize } = searchData;

  const identifier = "search-pageSize-select"

  return(
    <div className="relative sm:mb-6 md:mb-0 md:w-40 sm:w-100">
      <select
        id={identifier}
        className={selectClasses.input}
        value={pageSize.value}
        onChange={(event) => pageSize.set(event.target.value)}
      >
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
      <label htmlFor={identifier} className={selectClasses.label}>
        Results per page
      </label>
    </div>
  )
}

export default SearchPageSizeSelect;
