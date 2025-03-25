import { SearchAPIWrapper } from "@civicactions/data-catalog-components";
import { MetastoreWrapper } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedDatasets from '../components/FeaturedDatasets';
import ThemeCards from '../components/ThemeCards';
import { getSortOrder } from '../common/functions';
import { FeaturedDatasetContext } from '../common/contexts';


const Home = () => {
  return (
    <Layout title="Home">
      <div>
        <Hero />
        <div className="container px-6 m-auto pt-6">
          <div className="flex flex-col items-center max-w-5xl m-auto">
            <h2 className="text-2xl font-bold my-4">Dataset topics</h2>
            <MetastoreWrapper
              rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}
              schema={"theme"}
            >
              <ThemeCards />
            </MetastoreWrapper>
          
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
      </div>
    </Layout>
  );
}

export default Home;


