import React, {useEffect} from "react";
import { useQuery } from '@tanstack/react-query';
import {
  Blocks,
  Hero,
  IconList,
  IconListItem,
  StatBlock
} from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import FeaturedDatasets from '../../components/FeaturedDatasets';
import copy from "../../assets/copy.json";

const Home = () => {
  const datasets = useQuery({
    queryKey: ['datasets'],
    queryFn: () => {
      return fetch(`${import.meta.env.VITE_REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`).then(
        (res) => res.json(),
      )
    }
  }).data;

  const themes = useQuery({
    queryKey: ['themes'],
    queryFn: () => {
      return fetch(`${import.meta.env.VITE_REACT_APP_ROOT_URL}/metastore/schemas/theme/items`).then(
        (res) => res.json(),
      )
    }
  }).data;

  const orderedDatasets = (datasets && datasets.length) ? datasets.sort(function(a,b) {
    return a.title - b.title;
  }): [];

  const fDatasets = orderedDatasets.length > 3 ? orderedDatasets.slice(orderedDatasets.length -3, orderedDatasets.length) : orderedDatasets;

  const items = (themes && themes.length) ? 
    themes.map(x => {
      let item = {
        identifier: x.identifier,
        ref: `search?theme=${x.data}`,
        title: x.data,
        size: "100"
      };
      return item;
    }) : [];

  return (
    <Layout title="Home">
        <div className="home-page">
        <Hero title={copy.hero[0].title} intro={copy.hero[0].intro} gradient={'rgb(22, 46, 81), rgb(9, 120, 188)'} />
        <div className="container">
            <IconList
                items={items}
                component={IconListItem}
                paneTitle="Dataset Topics"
                className="opendata-icon-list"
            />
        </div>
        <Blocks
            items={copy.stats}
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
