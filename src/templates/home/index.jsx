import React from "react";
import axios from 'axios';
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
  const [datasets, setDatasets] = React.useState(null);
  const [themes, setThemes] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [fDatasets, setFDatasets] = React.useState([])


  React.useEffect(() => {
    async function getDatasets() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
      setDatasets(data);
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

  React.useEffect(() => {
    setItems(themes.map(x => {
      let item = {
        identifier: x.identifier,
        ref: `search?theme=${x.data}`,
        title: x.data,
        size: "100"
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
