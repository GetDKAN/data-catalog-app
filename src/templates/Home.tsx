import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedDatasets from '../components/FeaturedDatasets';

const Home = () => {
  return (
    <Layout title="Home">
      <div className="">
        <Hero />
        <h2>Dataset Topics</h2>
        <ul>
          <li>Transportation</li>
          <li>City planning</li>
          <li>Finance and budgeting</li>
          <li>Public safety</li>
          <li>Health care</li>
        </ul>
        <FeaturedDatasets />
      </div>
    </Layout>
  );
}

export default Home;


