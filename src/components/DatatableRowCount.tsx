import { useContext, useMemo, useState } from "react";
import { DatastoreContext } from "@civicactions/data-catalog-components";

const DatatableRowCount = () => {
  const datastoreContext = useContext(DatastoreContext);
  const { count, limit, offset } = datastoreContext;
  const offsetPlusLimit = offset.value + limit.value
  const offsetPlusOne = offset.value + 1
  return (
    <span className="block mb-4">
      {offsetPlusOne}-{count <= offsetPlusLimit ? count : offsetPlusLimit} of {count} rows
    </span>
  )
}

export default DatatableRowCount;
