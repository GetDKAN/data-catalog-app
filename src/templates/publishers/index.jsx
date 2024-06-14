import React from 'react';
import axios from 'axios';
import { PublisherList } from "@civicactions/data-catalog-components";
import config from "../../assets/config";
import Layout from '../../components/Layout';

const Publishers = () => {
  const { t } = useTranslation('publishers');
  const [orgs, setOrgs] = React.useState(null);
  const [publishers, setPublishers] = React.useState([])

  React.useEffect(() => {
    async function getOrgs() {
      const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/publisher/items`)
      setOrgs(data);
    }
    if (orgs === null) {
      getOrgs();
    }
    if (orgs) {
      const items = [];
      orgs.forEach(element => {
        items.push(element.data);
      });
      setPublishers(items);
    }
  }, [orgs])

  return (
    <Layout title="Dataset Publishers">
    <div className={`dc-page ${config.container}`}>
      <h1>Dataset Publishers</h1>
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

        <PublisherList items = {publishers} />

      </div>
    </div>
    </Layout>
  );
}

export default Publishers;
