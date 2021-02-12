import React from 'react';
import { useTranslation } from 'react-i18next';
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const About = () => {
  const { t } = useTranslation('about');
  return(
    <Layout title="About">
      <div className={`dc-page ${config.container}`}>
        <h1>{t('about:title', 'Fallback')}</h1>
        <div className="dc-page-content row">
          <div class="col-md-9 col-sm-12">
            <p>{t('about:p1')}</p>
            <p>{t('about:p2')}</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>{t('about:announcement')}</p>
            </Announcement>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default About;
