import { useSearchAPI } from "@civicactions/data-catalog-components";
import { Link } from "react-router-dom";
import { truncateDescription } from '../common/functions';
import { cardClasses } from '../theme/tailwindClasses';

const FeaturedDatasets = () => {
  const rootURL = import.meta.env.VITE_REACT_APP_ROOT_URL;
  const { data } = useSearchAPI(rootURL, "recentDatasets", {"page-size": 3}, [])
  console.log(data)
  let results = data?.results ? data.results : {};
  return(
    <div className="flex flex-col items-center max-w-2xl m-auto">
      <h2 className="text-2xl font-bold my-4">Recent datasets</h2>
      <ul className="flex flex-wrap lg:flex-nowrap">
        {Object.keys(results).length > 0 && Object.keys(results).map((key) => {
          const result = data.results[key];
          return (
            <li className={cardClasses} key={result.identifier}>
              <div className="p-6 min-w-3xs">
                <h3 className="font-bold text-xl">
                  <Link to={`/dataset/${result.identifier}`}>
                    {result.title}
                  </Link>
                </h3>
                <div>
                  {truncateDescription(result.description, 150)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturedDatasets;
