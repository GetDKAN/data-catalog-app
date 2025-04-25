import { DatastoreParams } from "@civicactions/data-catalog-components";
import { selectClasses } from "../theme/tailwindClasses";

type DatatableLimitSelectProps = {
  limit: number;
  id: string;
  params: {
    set: Function;
    previous: DatastoreParams | undefined;
  }
}

const DatatableLimitSelect = ({limit, id, params}: DatatableLimitSelectProps) => {
  return (
    <div className="relative sm:mb-6 md:mb-0 md:w-40 sm:w-100">
      <select
        id={`limit_select_${id}`}
        className={selectClasses.input}
        value={limit}
        onChange={(event) => params.set({
          ...params.previous,
          limit: event.target.value,
          offset: 0,
        })}
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
