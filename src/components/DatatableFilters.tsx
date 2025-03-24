import { useState, useContext, useEffect, useMemo } from 'react';
import { DatastoreContext } from "@civicactions/data-catalog-components";

import { cardClasses, buttonClasses, selectClasses, textInputClasses } from '../theme/tailwindClasses';

const DatatableFilters = () => {
  const datastoreContext = useContext(DatastoreContext);
  const {datastore, schema, id} = datastoreContext;
  const [formOpen, setFormOpen] = useState(false);
  const [tempProperty, setTempProperty] = useState(datastore);
  const [tempOperator, setTempOperator] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [filters, setFilters] = useState([]);
  const [localSchema, setLocalSchema] = useState(schema);
  function removeFilter(index) {
    let updatedFilters = [...filters]
    updatedFilters.splice(index, 1)
    setFilters(updatedFilters)
  }

  function resetFilters(close) {
    setTempValue("")
    setTempOperator("")
    setTempProperty("")
    if (close) {
      setFormOpen(false)
    }
  }

  function addFilter(close) {
    const newFilter = {
      id: Date.now(),
      property: tempProperty,
      operator: tempOperator,
      value: tempValue,
    }
    setFilters([...filters, newFilter])
    resetFilters(close)
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

    datastoreContext.conditions.set(filters.map((filter) => ({
      property: filter.property,
      operator: filter.operator,
      value: filter.value,
    })))
  }, [filters])

  useEffect(() => {
    if (!localSchema) {
      setLocalSchema(schema)
    }
  }, [schema])

  return(
    <div className="mb-4">
      {formOpen
        ? (<button className={buttonClasses} type="button" onClick={() => resetFilters(true)}>close</button>)
        : (<button className={buttonClasses} type="button" onClick={() => setFormOpen(true)}>+ Add new filter</button>)
      }
      {}
      {filters.length > 0
        && (<button className={buttonClasses} type="button" onClick={() => setFilters([])}>Remove all filters</button>)
      }
      {formOpen
        &&(
          <form onSubmit={(event) => handleSubmit(event)}>
            
            <fieldset className="flex">
              <div>
                <select
                  id={`property_select_${id}`}
                  className={selectClasses.input}
                  value={tempProperty}
                  onChange={(event) => setTempProperty(event?.target.value)}
                >
                  <option value="">Column</option>
                  {Object.keys(localSchema).map((key) => (
                    <option value={key}>
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
              <div>
                <select
                  id={`operator_select_${id}`}
                  className={selectClasses.input}
                  value={tempOperator}
                  onChange={(event) => setTempOperator(event?.target.value)}
                >
                  <option value="">Operator</option>
                  <option value="=">=</option>
                </select>
                <label htmlFor={`operator_select_${id}`} className={selectClasses.label}>
                  Operator
                </label>
              </div>
              <div>
                <input
                  id={`value_input_${id}`}
                  type="text"
                  className={textInputClasses.input}
                  onChange={(event) => setTempValue(event.target.value)}
                  value={tempValue}
                />
                <label htmlFor={`value_input_${id}`} className={textInputClasses.label}>
                  Search
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