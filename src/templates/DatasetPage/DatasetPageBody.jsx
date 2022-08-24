import React from 'react'
import Spinner from '../../components/Spinner';
import DatasetTags from '../../components/DatasetTags';
import AdditionalInformation from '../../components/AdditionalInformation';
import ResourcePreview from '../../components/ResourcePreview';
import ResourceDownload from "../../components/ResourceDownload";
import TopicIcon from "../../assets/TopicIcons";
import { getDataset } from "../../utility/getDataset";
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const DatasetPageBody = ({id}) => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["datasetPage", id], () => getDataset(process.env.REACT_APP_ROOT_URL, id)
  )
  if (isLoading) return <Spinner loading={isLoading} />;
  if (error) return "An error has occurred: " + error.message;
  const { title, description, keyword, distribution, theme } = data;
  return(
    <div>
      <div className="usa-prose">
        <h1>{title}</h1>
        <ul className="dkan-dataset-topic-list add-list-reset">
          {theme.map((t) => (
            <li key={t.identifier} >
              <TopicIcon title={t.data} height={16} width={16} />
              <Link to={`/search?theme=${t.data}`}>{t.data}</Link>
            </li>
          ))}
        </ul>
        <p dangerouslySetInnerHTML={{__html: description}} />
      </div>
      <div>
        <h2>Resources</h2>
        {distribution.map((dist, index) => {
          if(dist.data.format !== "csv") return <ResourceDownload data={dist.data} key={dist.identifier} />
          return (
            <ResourcePreview
              dist_id={dist.identifier}
              dist_data={dist.data}
              dataset_id={id}
              dist_index={index}
              key={dist.identifier}
            />
          )
        })}
      </div>
      <DatasetTags tags={keyword} />
      <AdditionalInformation metadata={data}/>
    </div>

  )
}

export default DatasetPageBody