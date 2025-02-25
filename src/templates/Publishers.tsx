// import { PublisherList } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';

const Publishers = () => {
  return (
    <Layout title="Dataset Publishers">
      <div>
        <h1 className="text-2xl">Dataset Publishers</h1>
        <div>
          <p>
            If you need to separate users and datasets into smaller collections,
            add the <a href="https://www.drupal.org/project/group">Group module</a>.
            Groups allow you to classify datasets that share a common
            publisher or organizational group (i.e. Parks and Recreation
            Department, Department of Education). Behind the scenes, Groups
            can offer an additional set of roles and permissions that ensure
            quality and security when publishing data. This is especially
            important for large sites that may have several working groups
            publishing data to the same site.
          </p>
          {/* <PublisherList items = {orgs} /> */}
        </div>
      </div>
    </Layout>
  );
}

export default Publishers;
