import React from 'react';
import { PublisherList } from "@civicactions/data-catalog-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import config from "../../assets/config";
import Layout from '../../components/Layout';
import orgs from "../../assets/publishers";

const Publishers = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout title="Dataset Publishers">
    <div className={`dc-page ${config.container}`}>
      <h1>{t('publishers.title')}</h1>
      <div>
        <p>
          Groups allow you to classify datasets that share a common
          publisher or organizational group (i.e. Parks and Recreation
          Department, Department of Education). Behind the scenes, Groups
          can offer an additional set of roles and permissions that ensure
          quality and security when publishing data. This is especially
          important for large sites that may have several working groups
          publishing data to the same site.
        </p>

        <PublisherList items = {orgs} />

      </div>
    </div>
    </Layout>
  );
}

export default Publishers;
