import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import { selectClasses } from "../theme/tailwindClasses";

function transformSort(sort: string | undefined, sortOrder: string | undefined): string {
  if(!sort || !sortOrder) {
    console.error("Incorrect/missing sort or sortOrder.")
    return "newest"
  }
  
  if(sort === "modified" && sortOrder == "asc") {
    return "oldest";
  }
  if(sort === "modified" && sortOrder == "desc") {
    return "newest";
  }
  if(sort === "title" && sortOrder == "asc") {
    return "titleAZ";
  }
  if(sort === "title" && sortOrder == "desc") {
    return "titleZA";
  }
  
}

const SearchSortSelect = () => {
  const searchData = useContext(SearchPageContext);
  const { searchParams } = searchData;
  const identifier = "search-sort-select"
  function handleChange(event) {
    const sort = event.target.value;
    if(sort === "newest") {
      searchParams.set({
        ...searchParams.value,
        sort: "modified",
        "sort-order": "desc"
      })
    } else if(sort === "oldest") {
      searchParams.set({
        ...searchParams.value,
        sort: "modified",
        "sort-order": "asc"
      })
    } else if(sort === "titleAZ") {
      searchParams.set({
        ...searchParams.value,
        sort: "title",
        "sort-order": "asc"
      })
    } else if(sort === "titleZA") {
      searchParams.set({
        ...searchParams.value,
        sort: "title",
        "sort-order": "desc"
      })
    } else {
      console.error("Incorrect sort value.")
    }
  }

  return(
    <div className="relative md:mr-3 sm:mb-6 md:mb-0 md:w-40 sm:w-100">
      <select
        id={identifier}
        className={selectClasses.input}
        value={transformSort(searchParams.value.sort, searchParams.value["sort-order"])}
        onChange={(event) => handleChange(event)}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="titleAZ">Title A-Z</option>
        <option value="titleZA">Title Z-A</option>
      </select>
      <label htmlFor={identifier} className={selectClasses.label}>
        Sort
      </label>
      
    </div>
  )
  
}

export default SearchSortSelect;
