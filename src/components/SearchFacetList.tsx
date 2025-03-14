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
    <details className="py-4 group" open>
      <summary
        className="border-b-1 [&::-webkit-details-marker]:hidden relative pr-8 font-medium text-lg list-none cursor-pointer focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 "
      >
        <span className="px-2">{createTitle(type)}</span>
      </summary>
      <ul className="mt-4 px-2">
        {facets.map((facet) => {
          return(
            <li key={facet.name}>
              <IndividualSearchFacet facet={facet} />
            </li>
          );
        })}
      </ul>
    </details>
  );
}

export default SearchFacetList;
