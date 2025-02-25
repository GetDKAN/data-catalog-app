interface SearchFacetListProps {
  facets: Array<{
    typs: string;
    name: string;
    total: string;
  }>;
  type: string;
}

const SearchFacetList = ({facets, type}: SearchFacetListProps) => {
  return(
    <div className="mb-4">
      <h2 className="font-bold text-lg">{type}</h2>
      <ul>
        {facets.map((facet) => {
          const facetId: string = `${type}_${facet.name.replace(/ /g,'')}`;
          return(
            <li key={facet.name}>
              <input id={facetId} type="checkbox" />
              <label htmlFor={facetId}>
                {facet.name}({facet.total})
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchFacetList;
