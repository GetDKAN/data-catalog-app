import React from "react";
import ResourceTableDisplay from '../ResourceTableDisplay'
import ResourceTableLimitSelect from '../ResourceTableLimitSelect'
import ResourceTableRowCount from '../ResourceTableRowCount'

const ResourceTableHeader = ({id, data, changeLimit, displayOptions, quickFilterOpen, toggleQuickFilter, dataset_id, dist_index, hideQuickFilter}) => {
  const {count, query} = data;

  return(
    <div className="dkan-resource--table-header">
      <ResourceTableRowCount count={count} offset={query.offset} limit={query.limit} />
      <ResourceTableLimitSelect id={id} limit={query.limit} onChangeFnc={changeLimit} />
      <ResourceTableDisplay id={id} options={displayOptions} />
      <button className="usa-button usa-button--outline">Manage columns</button>
      {!hideQuickFilter &&
        <button className="usa-button usa-button--outline" onClick={() => toggleQuickFilter(!quickFilterOpen)}>Quick Filter</button>
      }
    </div>
  );
}

export default ResourceTableHeader
