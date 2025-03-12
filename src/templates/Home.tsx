import { createContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchAPIWrapper } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedDatasets from '../components/FeaturedDatasets';
import ThemeIcon from '../components/ThemeIcon';

const themes = [
  "Transportation", "City planning", "Finance and budgeting", "Public safety", "Healthcare"
]

export const FeaturedDatasetContext = createContext();
function getSortOrder(sort) {
  return sort === "title" ? "asc" : "desc";
}

const Home = () => {
  return (
    <Layout title="Home">
      <div className="">
        <Hero />
        <div className="flex flex-col items-center max-w-5xl m-auto">
          <h2 className="text-2xl font-bold my-4">Dataset topics</h2>
          <ul className="flex flex-wrap justify-center">
            {themes.map((theme) => (
              <li className="border rounded-lg m-4 bg-white" key={theme}>
                  <Link className="flex flex-col items-center py-4 px-9 text-lg min-w-3xs" to="/search">
                    <ThemeIcon size={100}/>
                    {theme}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
        <SearchAPIWrapper
        customQueryKey="featured"
          CustomContext={FeaturedDatasetContext}
          rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}
          options={{pageSize: 3, getSortOrder: getSortOrder}}
        >
          <FeaturedDatasets />
        </SearchAPIWrapper>
      </div>
    </Layout>
  );
}

export default Home;


