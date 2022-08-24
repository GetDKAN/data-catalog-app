import React from 'react';
const QueryBuilderRow = () => {
  return (
    <fieldset className="dkan-query-builder--row">
      <div className="dkan-query-builder--row-property">
        <label className="usa-label" htmlFor="property">Property</label>
        <input className="usa-input" id="property" name="property" type="text" />
      </div>
      <div className="dkan-query-builder--row-operator">
        <label className="usa-label" htmlFor="operator">Operator</label>
        <select className="usa-select" name="operator" id="operator">
          <option value="=">Is</option>
          <option value="!=">Is not</option>
        </select>
      </div>
      <div className="dkan-query-builder--row-value">
        <label className="usa-label" htmlFor="value">Value</label>
        <input className="usa-input" id="value" name="value" type="text" />
      </div>
    </fieldset>
  )
}
export default QueryBuilderRow