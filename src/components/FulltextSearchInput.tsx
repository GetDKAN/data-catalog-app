import { useContext, useState } from "react";
import { SearchPageContext } from "../common/contexts";
import { textInputClasses, buttonClasses } from "../theme/tailwindClasses";



const FulltextSearchInput = () => {
  const searchData = useContext(SearchPageContext);
  const { searchParams } = searchData;
  const { value, set } = searchParams;
  const [fulltext, setFulltext] = useState(value?.fulltext ? value.fulltext : "" )
  function handleSubmit(event) {
    event.preventDefault()
    set({...value, fulltext: fulltext})
  }
  const identifier = "fulltext-search"
  return(
    <form className="relative md:my-6 px-2" onSubmit={(event) => handleSubmit(event)}>
      <input id={identifier} className={textInputClasses.input} type='search' onChange={(e) => setFulltext(e.target.value)} value={fulltext.value} />
      <button className={`${buttonClasses} ${textInputClasses.button}`} type="submit" >Search</button>
      <label htmlFor={identifier} className={textInputClasses.label}>
        Search
      </label>
    </form>
  );
}

export default FulltextSearchInput;