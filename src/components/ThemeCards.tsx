import { useContext } from "react";
import { Link } from 'react-router-dom';
import { MetastoreContext } from "@civicactions/data-catalog-components";
import ThemeIcon from './ThemeIcon';
import { cardClasses } from "../theme/tailwindClasses";

const ThemeCards = () => {
  const metastore = useContext(MetastoreContext);
  const { data } = metastore;
  return(
     <>
      {data && 
        <ul className="flex flex-wrap justify-center">
          {data.map((theme) => (
            <li className={cardClasses} key={theme.identifier}>
              <div>
                <Link className="flex flex-col items-center p-6 text-lg min-w-3xs" to={`/search?&theme=${theme.data}`}>
                  <ThemeIcon size={100} title={theme.data} />
                  {theme.data}
                </Link>
              </div>
            </li>
          ))}
        </ul>

      }
     </>
  );
}

export default ThemeCards;
