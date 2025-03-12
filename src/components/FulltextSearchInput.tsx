import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import { textInputClasses, buttonClasses } from "../theme/tailwindClasses";



const FulltextSearchInput = () => {
  const searchData = useContext(SearchPageContext);
  const { fulltext } = searchData;
  function handleSubmit(event) {
    event.preventDefault()
    searchData.search()
  }

  return(
    <form className="flex items-center" onSubmit={(event) => handleSubmit(event)}>
      <input className={textInputClasses} type='text' onChange={(e) => fulltext.set(e.target.value)} value={fulltext.value} />
      <button className={buttonClasses} type="submit" >Search</button>
    </form>
  );
}

export default FulltextSearchInput;