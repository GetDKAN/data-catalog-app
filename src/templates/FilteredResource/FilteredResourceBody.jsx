import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner';
import { getDataset } from "../../utility/getDataset";
import QueryBuilder from '../../components/QueryBuilder';
import ResourcePreview from '../../components/ResourcePreview';

const FilteredResourceBody = ({id, idx}) => {
  const { isLoading, error, data } = useQuery(
    ["datasetPage", id], () => getDataset(process.env.REACT_APP_ROOT_URL, id)
  )
  if (isLoading) return <Spinner loading={isLoading} />;
  if (error) return "An error has occurred: " + error.message;
  const { title, description, distribution } = data;
  // const { isLoading, error, data, isFetching } = useQuery(
  //   ["datasetPage", id, idx], () => getResourceByIndex(id, idx)
  // )
  // if (isLoading) return <Spinner loading={isLoading} />;
  // if (error) return "An error has occurred: " + error.message;
  console.log(data)

  return(
    <div>
      <div className="usa-prose">
        <h1>{title}</h1>
        <div className="usa-prose">
          <p dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </div>
      <QueryBuilder />
      <ResourcePreview
        dist_id={distribution[idx].identifier}
        dist_data={distribution[idx].data}
        dataset_id={id}
        dist_index={idx}
        hideDownload={true}
        hideFilterLink={true}
        hideQuickFilter={true}
      />
    </div>
  )
}

export default FilteredResourceBody