import { Link } from "react-router-dom";
import { SearchApiResult } from "../types/searchApiResult.types";
import ThemeBadge from "./ThemeBadge";
import { truncateDescription } from "../common/functions";
import { cardClasses } from "../theme/tailwindClasses";

interface SearchListItemProps {
  item: SearchApiResult;
}

const SearchListItem = ({item}: SearchListItemProps) => {
  const { title, theme, description, identifier } = item;
  return (
    <div className={`${cardClasses} mb-6`}>
      <div className="p-6">
        <h2 className="font-bold text-xl">
          <Link to={`/dataset/${identifier}`}>
            {title}
          </Link>
        </h2>
        <div className="py-3">
          {theme && theme.map((t) => (
            <ThemeBadge key={t} theme={t} />
          ))}
        </div>
        <div>
          {truncateDescription(description, 250)}
        </div>
        <div>
          Files
        </div>
      </div>
    </div>
  );
}

export default SearchListItem;
