import React from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import qs from 'qs';
import TextTruncate from 'react-text-truncate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from "../../components/Layout";
import Spinner from '../../components/Spinner';
import TopicIcon from '../../assets/TopicIcons';
import Pagination from '../../components/Pagination';

function getUniqueFormats(dist_array) {
  let unique = {};
  dist_array.forEach((dist) => {
    const format = dist.format;
    if(unique[format]) {
      unique[format] += 1;
    } else {
      unique[format] = 1
    }
  })

  return unique;
};

type DatasetSearchType = {
  additionalParams: any;
}


//new Date().toLocaleDateString('en-us', dateOptions)
const DatasetSearch = ({additionalParams}: DatasetSearchType) => {
  // const location = useLocation();
  const queryClient = new QueryClient()
  return (
    <Layout title="Search">
      <div className="grid-container">
        <div className="grid-row">
          <div className="usa-prose">
            <h1>Datasets</h1>
          </div>
        </div>
        <QueryClientProvider client={queryClient}>
          <DatasetSearchBody />
       </QueryClientProvider>
      </div>
    </Layout>
  );
}

function getSearchData(selectedTopics, selectedTags, fulltext) {
  return axios({
    method: "GET",
    url: `https://demo.getdkan.org/api/1/search`,
    params: {
      theme: selectedTopics.length ? selectedTopics.join(",") : null,
      keyword: selectedTags.length ? selectedTags.join(",") : null,
      fulltext: fulltext ? fulltext : null,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNulls: true });
    }
  })
  .then((res) => res.data)
}
const dateOptions = { year:"numeric", month:"short", day:"numeric"};
const DatasetSearchBody = () => {

  const [fulltextInput, setFullTextInput] = React.useState("")
  const [selectedFulltext, setSelectedFulltext] = React.useState("")
  const [selectedTopics, setSelectedTopics] = React.useState([])
  const [selectedTags, setSelectedTags] = React.useState([])

  const handleTopicChange = (value) => {
    if (selectedTopics.findIndex((el) => el === value) < 0) {
      setSelectedTopics([
        ...selectedTopics,
        value
      ])
    } else {
      const newArray = selectedTopics.filter((el) => el !== value);
      setSelectedTopics(newArray)
    }
  }

  const handleFulltextSubmit = (event) => {
    event.preventDefault();
    setSelectedFulltext(fulltextInput)
  }

  const handleTagChange = (value) => {
    if (selectedTags.findIndex((el) => el === value) < 0) {
      setSelectedTags([
        ...selectedTags,
        value
      ])
    } else {
      const newArray = selectedTags.filter((el) => el !== value);
      setSelectedTags(newArray)
    }
  }

  const { isLoading, error, data } = useQuery(
    ["datasetSearch", selectedTopics, selectedTags, selectedFulltext],
    () => getSearchData(selectedTopics, selectedTags, selectedFulltext)
  )

  if (isLoading) return <Spinner loading={isLoading} />;
  if (error) return "An error has occurred: " + error.message;

  const {results, total} = data;
  const topics = data.facets.filter((facet) => facet.type === "theme")
  const tags = data.facets.filter((facet) => facet.type === "keyword")

  return (
    <div className="grid-row">
      <div className="grid-col-9">
        <form className="dkan-dataset-search--fulltext-container" onSubmit={(e) => handleFulltextSubmit(e)}>
          <div className="dkan-dataset-search--fulltext-input-container">
            <label className="usa-label" htmlFor="input-type-text">Dataset text search</label>
            <input className="usa-input" value={fulltextInput} id="input-type-text" name="input-type-text" onChange={(e) => setFullTextInput(e.target.value)} />
          </div>
          <button type="submit" className="usa-button">Search</button>
        </form>
        <div className="grid-row padding-top-2 font-ui-md">
          {total} datasets found.
        </div>
        <ul className="usa-collection">
          {Object.keys(results).map((objKey) => {
            const item = results[objKey]
            return (
              <li className="usa-collection__item" key={item.identifier}>
                <DatasetSearchResult result={item} />
              </li>
            )
          })}
        </ul>
        <Pagination
          totalPages={Math.ceil(total / 10)}
          currentPage={1}
          buttonAction={() => console.log('blah')}
        />
      </div>
      <div className="grid-col-3">
        <FacetList
          title="Topics"
          facets={topics}
          handleChange={handleTopicChange}
          selectedFacets={selectedTopics}
        />
        <FacetList
          title="Tags"
          facets={tags}
          handleChange={handleTagChange}
          selectedFacets={selectedTags}
        />
      </div>
    </div>
  )
}

const DatasetSearchResult = ({result}) => {
  const uniqueFormatObj = getUniqueFormats(result.distribution);
  return(
    <div className="usa-collection__body dkan-dataset-search-result">
      <h2 className="usa-collection__heading font-heading-lg dkan-dataset-search-result--heading">
        <Link className="usa-link" to={`/dataset/${result.identifier}`}>{result.title}</Link>
      </h2>
      <ul className="dkan-dataset-search-result--topic-list add-list-reset">
        {result.theme.map((t) => (
          <li key={t} >
            <TopicIcon title={t} height={16} width={16} />
            {t}
          </li>
        ))}
      </ul>
      <div className="usa-collection__description">
        <TextTruncate
          line={4}
          element="p"
          truncateText="…"
          text={result.description}
          // textTruncateChild={<a href="#">Read on</a>}
        />
      </div>
      <ul className="usa-collection__meta" aria-label="More information">
        <li className="usa-collection__meta-item">
          Last updated:
          {` `}
          <time dateTime={result.modified}>{new Date(result.modified).toLocaleDateString('en-us', dateOptions) }</time>
        </li>
        <li className="usa-collection__meta-item">
          By {result.publisher.name}
        </li>
      </ul>
      <ul className="usa-collection__meta" aria-label="Topics">
        {result.keyword.map((t) => <li key={t} className="usa-collection__meta-item usa-tag">{t}</li>)}
      </ul>
      <ul className="usa-collection__meta" aria-label="Topics">
        {Object.keys(uniqueFormatObj).map(
          (key) => (
            <li
              key={key}
              className="usa-collection__meta-item usa-tag"
            >
              {key} x {uniqueFormatObj[key]}
            </li>
          ))}
      </ul>
    </div>
  )
}


const FacetList = ({
  title,
  facets,
  handleChange,
  selectedFacets,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="dc-dataset-search--facets">
        {facets.map((facet) => (
          <li key={facet.name} className="dc-dataset-search--facet-option">
            <input
              id={`${facet.type}_${facet.name}`}
              type="checkbox"
              checked={selectedFacets.findIndex((el) => el === facet.name) > -1 ? true : false }
              value={facet.name}
              onChange={(e) => handleChange(e.target.value)}
              />
            <label  htmlFor={`${facet.type}_${facet.name}`}>
              <FontAwesomeIcon
                icon={['fas', selectedFacets.findIndex((el) => el === facet.name) > -1 ? 'check-square' : 'square']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              {facet.name} ({facet.total})
            </label>
        </li>
        ))}
      </ul>
    </div>
  )
}


export default DatasetSearch;
