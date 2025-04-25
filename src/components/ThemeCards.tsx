import { Link } from 'react-router-dom';
import ThemeIcon from './ThemeIcon';
import { cardClasses } from "../theme/tailwindClasses";
import { MetastoreSchemaTheme, useMetastore } from "@civicactions/data-catalog-components"

const ThemeCards = () => {
  const rootURL = import.meta.env.VITE_REACT_APP_ROOT_URL;
  const { data } = useMetastore(rootURL, "themeCards", "theme");
  return(
     <>
      {data && 
        <ul className="flex flex-wrap justify-center">
          {data.map((theme: MetastoreSchemaTheme) => (
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
