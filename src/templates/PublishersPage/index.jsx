import React from 'react';
import { useTranslation } from 'react-i18next';
import { PublisherList } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import orgs from "../../assets/publishers";

const PublishersPage = () => {
  const { t } = useTranslation('publishers');
  return (
    <Layout title="Dataset Publishers">
      <div className="dc-page grid-container">
        <h1>{t('publishers:title', 'Fallback Title')}</h1>
        <div>
          <p>{t('publishers:description')}</p>
          <PublisherList orgs={orgs} />
        </div>
      </div>
    </Layout>
  );
}

export default PublishersPage;
