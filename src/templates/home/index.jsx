import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {
  Blocks,
  Hero,
  IconList,
  IconListItem,
  StatBlock
} from "@civicactions/data-catalog-components";
import '../../i18n';
import Layout from '../../components/Layout';
import FeaturedDatasets from '../../components/FeaturedDatasets';

import copy from "../../assets/copy.json";
import UrbanismoIcon from 'ionicons/dist/svg/business-outline.svg';
import CulturaIcon from 'ionicons/dist/svg/color-palette-outline.svg';
import DemografiaIcon from 'ionicons/dist/svg/bar-chart-outline.svg';
import DeporteIcon from 'ionicons/dist/svg/bicycle-outline.svg';
import TransicionEnergeticaIcon from 'ionicons/dist/svg/flash-outline.svg';
import MedioAmbienteEnergeticaIcon from 'ionicons/dist/svg/leaf-outline.svg';
import SectorPublicoIcon from 'ionicons/dist/svg/globe-outline.svg';
import EducacionIcon from 'ionicons/dist/svg/school-outline.svg';

const Home = () => {
  const [datasets, setDatasets] = useState(null);
  const [themes, setThemes] = useState([]);
  const [items, setItems] = useState([]);
  const [fDatasets, setFDatasets] = useState([])
  const [stats, setStats] = useState(copy.stats)
  const { t, i18n } = useTranslation();

  const themeIcons = {
    'Cultura': CulturaIcon,
    'Educación': EducacionIcon,
    'Demografía': DemografiaIcon,
    'Deporte': DeporteIcon,
    'Sector Público': SectorPublicoIcon,
    'Medio Ambiente': MedioAmbienteEnergeticaIcon,
    'Transición Energética': TransicionEnergeticaIcon,
    'Urbanismo': UrbanismoIcon
  }

  useEffect(() => {
    async function getDatasets() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
      setDatasets(data);

      let updatedStats = JSON.parse(JSON.stringify(stats));
      updatedStats[2].title = data.length;
      setStats(updatedStats);
    }
    async function getThemes() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/theme/items`)
      setThemes(data);
    }
    if (datasets === null) {
      getDatasets()
      getThemes();
    }
    if (datasets) {
      const orderedDatasets = datasets.sort(function(a,b) {
        return a.title - b.title;
      });

      setFDatasets(orderedDatasets.length > 3 ? orderedDatasets.slice(orderedDatasets.length -3, orderedDatasets.length) : orderedDatasets);
    }
  }, [datasets])

  useEffect(() => {
    setItems(themes.map(x => {
      let item = {
        identifier: x.identifier,
        ref: `search?theme=${x.data}`,
        title: x.data,
        size: "100",
        image: themeIcons[x.data],
        color: 'FF0000'
      };
      return item;
    }))
  }, [themes])

  return (
    <Layout title="Home">
        <div className="home-page">
        <Hero title={copy.hero[0].title} intro={copy.hero[0].intro} gradient={'rgb(22, 46, 81), rgb(9, 120, 188)'} />
        <div className="container">
            <IconList
                items={items}
                component={IconListItem}
                paneTitle={t('home.topics')}
                className="opendata-icon-list"
            />
        </div>
        <Blocks
            items={stats}
            component={StatBlock}
            containerClass=""
            blockClass="StatBlock"
        />
        <FeaturedDatasets datasets={fDatasets} />
        </div>
    </Layout>
  );
}

export default Home;
