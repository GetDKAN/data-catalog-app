import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import { selectClasses } from "../theme/tailwindClasses";

const SearchPageSizeSelect = () => {
  const searchData = useContext(SearchPageContext);
  const { searchParams } = searchData;
  const { value, set, defaultParams } = searchParams;
  const identifier = "search-pageSize-select"
  
  return(
    <div className="relative sm:mb-6 md:mb-0 md:w-40 sm:w-100">
      <select
        id={identifier}
        className={selectClasses.input}
        value={value.hasOwnProperty('page-size') ? value['page-size'] : defaultParams["page-size"]}
        onChange={(event) => set({...value, "page-size": event.target.value})}
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
