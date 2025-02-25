import { Link } from "react-router-dom";
import { SearchApiResult } from "../types/searchApiResult.types";

interface SearchListItemProps {
  item: SearchApiResult;
}

const SearchListItem = ({item}: SearchListItemProps) => {
  const { title, theme, description, identifier } = item;
  console.log(item)
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
        {description}
      </div>
    </div>
  );
}

export default SearchListItem;
