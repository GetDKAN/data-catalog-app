import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedDatasets from '../components/FeaturedDatasets';
import ThemeCards from '../components/ThemeCards';

const Home = () => {
  return (
    <Layout title="Home">
      <div>
        <Hero />
        <div className="container px-6 m-auto pt-6">
          <div className="flex flex-col items-center max-w-5xl m-auto">
            <h2 className="text-2xl font-bold my-4">Dataset topics</h2>
            <ThemeCards />
          </div>
          <FeaturedDatasets />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
