import React from 'react';


const ResourceTableLimitSelect = ({id, label, limit, options, onChangeFnc}) => {
  const id_name = `${id}_limit-select`;
  return (
    <div>
      <label className="usa-label" htmlFor={id_name}>{label}</label>
      <select className="usa-select" id={id_name} value={limit} onChange={(e) => onChangeFnc(e.target.value)}>
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
ResourceTableLimitSelect.defaultProps = {
  options: [10, 25, 50, 100],
  label: "Rows per page"
}
export default ResourceTableLimitSelect;