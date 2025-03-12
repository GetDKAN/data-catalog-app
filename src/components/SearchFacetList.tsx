import IndividualSearchFacet from "./IndividualSearchFacet";

interface SearchFacetListProps {
  facets: Array<{
    type: string;
    name: string;
    total: string;
  }>;
  type: string;
}

function createTitle(facetType: string) {
  switch(facetType) {
    case "publisher__name":
      return "Publishers"
    case "theme":
      return "Topics";
    case "keyword":
      return "Tags";
    default:
      return facetType;
  }

}


const SearchFacetList = ({facets, type}: SearchFacetListProps) => {
  return(
    <div className="mb-4">
      <h2 className="font-bold text-lg">{createTitle(type)}</h2>
      <ul>
        {facets.map((facet) => {
          return(
            <li key={facet.name}>
              <IndividualSearchFacet facet={facet} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchFacetList;
