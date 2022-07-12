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
import SaludIcon from 'ionicons/dist/svg/medkit-outline.svg';
import SectorPublicoIcon from 'ionicons/dist/svg/globe-outline.svg';
import SociedadBienestarIcon from 'ionicons/dist/svg/people-outline.svg';
import EducacionIcon from 'ionicons/dist/svg/school-outline.svg';

const Home = () => {
  const [datasets, setDatasets] = useState(null);
  const [distributions, setDistributions] = useState(null);
  const [publishers, setPublishers] = useState(null);
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
    'Salud': SaludIcon,
    'Sector Público': SectorPublicoIcon,
    'Sociedad y bienestar': SociedadBienestarIcon,
    'Medio Ambiente': MedioAmbienteEnergeticaIcon,
    'Energía': TransicionEnergeticaIcon,
    'Urbanismo': UrbanismoIcon
  }

  useEffect(() => {
    let updatedStats = JSON.parse(JSON.stringify(stats));

    async function getDatasets() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
      setDatasets(data);

      updatedStats[1].title = data.length;
      setStats(updatedStats);
    }

    async function getThemes() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/theme/items`)
      setThemes(data);
    }

    if (datasets === null) {
      getDatasets();
      getThemes();
    }

    if (datasets) {
      const orderedDatasets = datasets.sort(function(a,b) {
        return a.title - b.title;
      });

      setFDatasets(orderedDatasets.length > 3 ? orderedDatasets.slice(orderedDatasets.length -3, orderedDatasets.length) : orderedDatasets);
    }
  }, [datasets, stats])

  useEffect(() => {
    let updatedStats = JSON.parse(JSON.stringify(stats));

    async function getDistributions() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/distribution/items`)
      setDistributions(data);

      updatedStats[2].title = data.length;
      setStats(updatedStats);
    }

    if (distributions === null) {
      getDistributions();
    }
  }, [distributions, stats])

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
