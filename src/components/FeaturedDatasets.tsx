import { useContext } from 'react';
import { Link } from "react-router-dom";
import { FeaturedDatasetContext } from '../templates/Home';
import { truncateDescription } from '../common/functions';

const FeaturedDatasets = () => {
  const searchData = useContext(FeaturedDatasetContext);
  let results = searchData?.data?.results
  return(
    <div className="flex flex-col items-center max-w-2xl m-auto">
      <h2 className="text-2xl font-bold my-4">Recent datasets</h2>
      <ul className="flex">
        {results && Object.keys(results).map((key) => {
          const result = searchData.data.results[key];
          return (
            <li key={result.identifier}>
              <h3 className="font-bold text-xl">
                <Link to={`/dataset/${result.identifier}`}>
                  {result.title}
                </Link>
              </h3>
              <div>
                {truncateDescription(result.description, 150)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturedDatasets;
