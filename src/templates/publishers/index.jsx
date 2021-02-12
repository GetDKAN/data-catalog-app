import React from 'react';
import { useTranslation } from 'react-i18next';
import { PublisherList } from "@civicactions/data-catalog-components";
import config from "../../assets/config";
import Layout from '../../components/Layout';
import orgs from "../../assets/publishers";

const Publishers = () => {
  const { t } = useTranslation('publishers');
  return (
    <Layout title="Dataset Publishers">
    <div className={`dc-page ${config.container}`}>
      <h1>{t('publishers:title', 'Fallback Title')}</h1>
      <div>
        <p>{t('publishers:description')}</p>

        <PublisherList items = {orgs} />

      </div>
    </div>
    </Layout>
  );
}

export default Publishers;
