import React from 'react';
import { buildCurrentRows } from '../../utility/buildCurrentRows';

const ResourceTableRowCount = ({count, offset, limit}) => {
  const rowCount = buildCurrentRows(count, offset, limit)
  return (
    <div>
      <p>{rowCount.start.toLocaleString()} - {rowCount.end.toLocaleString()} of {count.toLocaleString()} rows</p>
    </div>
  )
}

export default ResourceTableRowCount;