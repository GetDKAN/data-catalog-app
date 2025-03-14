import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import { selectClasses } from "../theme/tailwindClasses";

const SearchSortSelect = () => {
  const searchData = useContext(SearchPageContext);
  const { sort } = searchData;
  const identifier = "search-sort-select"

  return(
    <div className="relative md:mr-3 sm:mb-6 md:mb-0 md:w-40 sm:w-100">
      <select id={identifier} className={selectClasses.input} value={sort.value} onChange={(event) => sort.set(event.target.value)}>
        <option value="modified">Date</option>
        <option value="title">Alphabetical</option>
      </select>
      <label htmlFor={identifier} className={selectClasses.label}>
        Sort
      </label>
      
    </div>
  )
  
}

export default SearchSortSelect;
