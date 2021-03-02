import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Hero, Card } from '@civicactions/data-catalog-components';
import Layout from '../../components/Layout';
import excerpts from 'excerpts';
import copy from '../../assets/copy.json';

const HomePage = () => {
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
        <div className="grid-container">
          <div className="dc-featured-datasets grid-container">
            <h2 className="dc-featured-title">Dataset Topics</h2>
            <ol className="usa-card-group">
              {items && items.map((item) => (
                <Card
                  key={item.identifier}
                  className="tablet:grid-col-4 usa-card"
                  headingText={
                    <Link to={`search/${item.ref}`}>
                      <h3>{item.title}</h3>
                    </Link>
                  }
                  bodyText=""
                  includeFooter={false}
                />
              ))}
            </ol>
          </div>
        </div>
        <div>
          <h2 className="dc-featured-title">Featured Datasets</h2>
          <ol className="usa-card-group">
            {copy.stats.map((item) => (
              <Card
                isCollection
                cardVariant="flag"
                className="tablet:grid-col-4 usa-card"
                headingText={item.title}
                bodyText={item.content}
                includeFooter={false}
              />
            ))}
          </ol>
        </div>
        <div className="dc-featured-datasets grid-container">
          <h2 className="dc-featured-title">Featured Datasets</h2>
          <ol className="usa-card-group">
            {fDatasets && fDatasets.map((item) => (
              <Card
                isCollection
                className="tablet:grid-col-4 usa-card"
                headingText={
                  <Link to={`dataset/${item.identifier}`} key={item.identifier}>
                    <h3>{item.title}</h3>
                  </Link>
                }
                bodyText={excerpts(item.description, {words: 35})}
                includeFooter={false}
              />
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
