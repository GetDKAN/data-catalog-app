import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { useQuery } from '@tanstack/react-query';
import { getResourceByIndex } from '../../utility/getResouceByIndex';
import ResourceQuickFilter from '../ResourceQuickFilter'
import ResourceDownload from '../ResourceDownload';
import ResourceTableHeader from '../ResourceTableHeader';
import ResourceTable from '../ResourceTable';
import Pagination from '../Pagination';

const ResourcePreview = ({
  dist_id,
  dist_data,
  dataset_id,
  dist_index,
  hideDownload,
  hideFilterLink,
  hideQuickFilter
}) => {
  const [limit, setLimit] = React.useState(10);
  const [tableCompact, setTableCompact] = React.useState(false)
  const [tableBorderless, setTableBoarderless] = React.useState(false)
  const [quickFilterOpen, setQuickFilterOpen] = React.useState(false)
  const { isLoading, error, data } = useQuery(
    [`resource_${dataset_id}_${dist_index}`, dataset_id, dist_index, limit],
      () => getResourceByIndex(process.env.REACT_APP_ROOT_URL, dataset_id, dist_index, limit)
  )
  if (isLoading) return <Spinner loading={isLoading} />;
  if (error) return "An error has occurred: " + error.message;

  const displayOptions = [
    {id: "border", label: "Borderless", onclick: setTableBoarderless, selected: tableBorderless},
    {id: "compact", label: "Compact", onclick: setTableCompact, selected: tableCompact}
  ];

  return(
    <div className="dkan-resource">
      {!hideDownload &&
        <ResourceDownload data={dist_data} />
      }
      {!hideFilterLink &&
        <Link className="usa-button usa-button--accent-warm" to={`/dataset/${dataset_id}/${dist_index}`}>
          Filter {dist_data.title}
        </Link>
      }
      <ResourceTableHeader
        id={dist_id}
        data={data}
        changeLimit={setLimit}
        displayOptions={displayOptions}
        quickFilterOpen={quickFilterOpen}
        toggleQuickFilter={setQuickFilterOpen}
        dataset_id={dataset_id}
        dist_index={dist_index}
        hideQuickFilter={hideQuickFilter}
      />
      <ResourceQuickFilter isOpen={quickFilterOpen} quickFilterClose={setQuickFilterOpen} />
      <div className="usa-table-container--scrollable" tabIndex="0">
        <ResourceTable
          data={data}
          dist_id={dist_id}
          className={`usa-table usa-table--striped ${tableCompact ? "usa-table--compact" : ""} ${tableBorderless ? "usa-table--borderless" : ""}`}/>
      </div>
      <Pagination
        totalPages={Math.ceil(data.count / data.query.limit)}
        currentPage={1}
        buttonAction={() => console.log('blah')}
      />
    </div>
  )
}

ResourcePreview.defaultProps = {
  hideDownload: false,
  hideFilterLink: false,
  hideQuickFilter: false,
}

export default ResourcePreview;
