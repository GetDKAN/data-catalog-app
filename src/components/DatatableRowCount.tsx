import { useContext, useMemo, useState } from "react";
import { DatastoreContext } from "@civicactions/data-catalog-components";

const DatatableRowCount = () => {
  const datastoreContext = useContext(DatastoreContext);
  const { count, limit, offset } = datastoreContext;
  return (
    <span className="block mb-4">{offset.value + 1}-{offset.value + limit.value} of {count} rows</span>
  )
}

export default DatatableRowCount;
