import { useContext } from 'react';
import SearchFacetList from './SearchFacetList';
import { SearchPageContext } from "../common/contexts";

const SearchFacets = () => {
  const searchData = useContext(SearchPageContext);
  const facetsObject: any = {};
  if(searchData?.data?.facets) {
    searchData.data.facets.forEach((facet) => {
      if(facetsObject.hasOwnProperty(facet.type)) {
        facetsObject[facet.type].push(facet);
      } else {
        facetsObject[facet.type] = [facet];
      }
    })
  }
  return(
    <div>
      {Object.keys(facetsObject).map((facetKey) => (
        <SearchFacetList
          key={facetKey}
          type={facetKey}
          facets={facetsObject[facetKey]}
        />
      ))}
    </div>
  );
}

export default SearchFacets;
