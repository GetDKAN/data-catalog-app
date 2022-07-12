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
    <Layout title="Publicadores de Conjuntos de Datos">
    <div className={`dc-page ${config.container}`}>
      <h1>{t('publishers.title')}</h1>
      <div>
        <PublisherList items = {orgs} />
      </div>
    </div>
    </Layout>
  );
}

export default Publishers;
