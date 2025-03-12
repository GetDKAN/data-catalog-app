import { Link } from "react-router-dom";
import { SearchApiResult } from "../types/searchApiResult.types";
import { truncateDescription } from "../common/functions";

interface SearchListItemProps {
  item: SearchApiResult;
}

const SearchListItem = ({item}: SearchListItemProps) => {
  const { title, theme, description, identifier } = item;
  return (
    <div className="mb-8">
      <h2 className="font-bold text-lg">
        <Link to={`/dataset/${identifier}`}>
          {title}
        </Link>
      </h2>
      {theme.map((t) => (
        <span key={t}>{t}</span>
      ))}
      <div>
        {truncateDescription(description, 250)}
      </div>
    </div>
  );
}

export default SearchListItem;
