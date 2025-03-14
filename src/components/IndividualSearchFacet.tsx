import { useContext } from "react";
import { SearchPageContext } from "../common/contexts";
import { checkboxClasses } from "../theme/tailwindClasses";

const IndividualSearchFacet = ({facet}) => {
  const searchData = useContext(SearchPageContext);
  const { facets } = searchData;
  const facetId: string = `${facet.type}_${facet.name.replace(/ /g,'')}`;

  function handleChange(event, checkedFacet) {
    const { type, name } = checkedFacet;
    const checked = event.target.checked;
    facets.set(type, name, checked)
  }
  return(
    <div className="flex items-center">
      <input
        className={checkboxClasses.input}
        checked={facets.value && facets.value[facet.type] && facets.value[facet.type].includes(facet.name) ? true : false}
        id={facetId}
        type="checkbox"
        onChange={(event) => handleChange(event, facet)}
      />
      <label className={checkboxClasses.label} htmlFor={facetId}>
        {facet.name} ({facet.total})
      </label>
    </div>
  );
  
}

export default IndividualSearchFacet;
