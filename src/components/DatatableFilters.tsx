import { useState, useEffect } from 'react';
import { DatastoreParams } from '@civicactions/data-catalog-components';
import { cardClasses, buttonClasses, selectClasses, textInputClasses } from '../theme/tailwindClasses';

type DatatableFiltersProps = {
  datastore: any;
  schema: any;
  id: string;
  params: {
    set: Function;
    previous: DatastoreParams | undefined;
  };
}

const DatatableFilters = ({datastore, schema, id, params}: DatatableFiltersProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const [tempProperty, setTempProperty] = useState(datastore);
  const [tempOperator, setTempOperator] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [filters, setFilters] = useState(datastore?.query?.conditions && datastore.query.conditions.length > 0 ? datastore.query.conditions : []);
  const [localSchema, setLocalSchema] = useState(schema);

  function removeFilter(index: number) {
    let updatedFilters = [...filters]
    updatedFilters.splice(index, 1)
    setFilters(updatedFilters)
  }

  function resetFilters(close: boolean) {
    setTempValue("")
    setTempOperator("")
    setTempProperty("")
    if (close) {
      setFormOpen(false)
    }
  }

  function addFilter(close: boolean) {
    const newFilter = {
      id: Date.now(),
      property: tempProperty,
      operator: tempOperator,
      value: tempValue,
    }
    setFilters([...filters, newFilter])
    resetFilters(close)
    params.set({
      ...params.previous,
      conditions: [...filters, newFilter],
      offset: 0,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addFilter(true)
    setFormOpen(false);
  }

  function canAddFilter() {
    let canFilter = true;
    if (tempValue === "") {
      canFilter = false
    }
    if (tempProperty === "") {
      canFilter = false
    }
    if (tempOperator === "") {
      canFilter = false
    }
    return canFilter;
  }

  useEffect(() => {
    if (Object.keys(schema).length > 0) {
      setLocalSchema(schema)
    }
  }, [schema])

  return(
    <div className="mb-4">
      <div className="mb-4">
      {formOpen
        ? (<button className={buttonClasses} type="button" onClick={() => resetFilters(true)}>Close</button>)
        : (<button className={buttonClasses} type="button" onClick={() => setFormOpen(true)}>+ Add new filter</button>)
      }
      </div>
      {filters.length > 0
        && (<button className={buttonClasses} type="button" onClick={() => setFilters([])}>Remove all filters</button>)
      }
      {formOpen
        &&(
          <form onSubmit={(event) => handleSubmit(event)}>
            <fieldset className="flex bg-white rounded shadow-md px-2 py-3">
              <div className="relative mr-2">
                <select
                  id={`property_select_${id}`}
                  className={selectClasses.input}
                  value={tempProperty}
                  onChange={(event) => setTempProperty(event?.target.value)}
                >
                  <option value="">Choose column</option>
                  {Object.keys(localSchema).map((key) => (
                    <option key={key} value={key}>
                      {localSchema[key]?.description
                        ? localSchema[key]?.description
                        : key
                      }
                    </option>
                  ))
                  }
                </select>
                <label htmlFor={`property_select_${id}`} className={selectClasses.label}>
                  Column
                </label>
              </div>
              <div className="relative w-40 mr-2">
                <select
                  id={`operator_select_${id}`}
                  className={selectClasses.input}
                  value={tempOperator}
                  onChange={(event) => setTempOperator(event?.target.value)}
                >
                  <option value="">Choose operator</option>
                  <option value="=">=</option>
                </select>
                <label htmlFor={`operator_select_${id}`} className={selectClasses.label}>
                  Operator
                </label>
              </div>
              <div className="relative mr-2">
                <input
                  id={`value_input_${id}`}
                  type="text"
                  className={textInputClasses.input}
                  onChange={(event) => setTempValue(event.target.value)}
                  value={tempValue}
                />
                <label htmlFor={`value_input_${id}`} className={textInputClasses.label}>
                  Value
                </label>
              </div>
              <button className={`${buttonClasses} mr-2`} disabled={!canAddFilter()} type="button" onClick={() => addFilter(false)}>Add another filter</button>
              <button className={buttonClasses} disabled={!canAddFilter()} type="submit">Done</button>
            </fieldset>
          </form>
        )
      }
      <div className="flex flex-wrap">
        {localSchema &&
          filters.map((filter, index) => (
            <span className={`${cardClasses} px-2 py-1 mr-2`} key={filter.id}>
              {localSchema[filter.property].description} {filter.operator} {filter.value}
              <button className={`${buttonClasses} ml-2`} type="button" onClick={(index) => removeFilter(index)}>delete</button>
            </span>
          ))
        }
      </div>
    </div>
  );
}

export default DatatableFilters;