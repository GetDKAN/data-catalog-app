// import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';
// import config from "../../assets/config";
import { version, dependencies } from '../../package.json';

const About = () => (
    <Layout title="About">
      <div className="container px-6 m-auto pt-6">
        <h1 className="text-2xl">About this site</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <p>This is the default state of the DKAN data catalog.</p>
            <p> This tool helps create open data catalogs using React and other libraries.</p>
          </div>
        </div>
        <h2>App version:</h2>
        <div className="dc-page-content row">
          <div className="col-12">
              <p>data-catalog-app: {version}</p>
              <p>data-catalog-components: {dependencies["@civicactions/data-catalog-components"]}</p>
          </div>
        </div>
      </div>
    </Layout>
);

export default About;
