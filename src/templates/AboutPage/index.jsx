import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return(
    <Layout title="About">
      <div className="dc-page grid-container">
        <h1>{t('about:title', 'Fallback')}</h1>
        <div className="dc-page-content">
          <div>
            <p>{t('about:p1')}</p>
            <p>{t('about:p2')}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default AboutPage;
