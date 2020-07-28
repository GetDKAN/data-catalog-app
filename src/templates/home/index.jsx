import React from "react";
import axios from 'axios';
import {
  Blocks,
  Hero,
  IconList,
  IconListItem,
  StatBlock
} from "@civicactions/data-catalog-components";
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
    <div className="home-page">
      <Hero title={copy.hero[0].title} intro={copy.hero[0].intro} />
      <IconList
        items={items}
        component={IconListItem}
        paneTitle="Dataset Topics"
        className="opendata-icon-list"
      />
       <Blocks
        items={copy.stats}
        component={StatBlock}
        className="StatBlock"
      />
      <FeaturedDatasets datasets={fDatasets} />
    </div>
  );
}

export default Home;
