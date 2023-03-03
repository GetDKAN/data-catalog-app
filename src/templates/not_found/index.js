import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return (
    <h1>{t('not_found.title')}</h1>
  );
}

export default NotFound;
