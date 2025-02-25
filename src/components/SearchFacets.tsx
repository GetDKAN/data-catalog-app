import { useContext } from 'react';
import { SearchAPIContext } from "@civicactions/data-catalog-components";
import SearchFacetList from './SearchFacetList';

const SearchFacets = () => {
  const searchData = useContext(SearchAPIContext);
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
