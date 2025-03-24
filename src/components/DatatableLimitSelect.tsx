import { useContext, useMemo, useState } from "react";
import { DatastoreContext } from "@civicactions/data-catalog-components";
import { selectClasses } from "../theme/tailwindClasses";

const DatatableLimitSelect = () => {
  const datastoreContext = useContext(DatastoreContext);
  const { limit, id } = datastoreContext;
  return (
    <div className="relative sm:mb-6 md:mb-0 md:w-40 sm:w-100">
      <select
        id={`limit_select_${id}`}
        className={selectClasses.input}
        value={limit.value}
        onChange={(event) => limit.set(event.target.value)}
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
      <label htmlFor={`limit_select_${id}`} className={selectClasses.label}>
        Results per page
      </label>
    </div>
  )
}

export default DatatableLimitSelect;
