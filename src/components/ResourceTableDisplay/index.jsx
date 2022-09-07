import React from 'react';

const ResourceTableDisplay = ({id, options}) => {
  return (
    <div className="dkan-resouce--table-display">
      {options.map((opt) => {
        const id_name = `${id}_${opt.label.replace(/ /g, '')}`
        return(
          <div key={opt.id}>
            <input className="usa-checkbox__input" id={id_name} checked={opt.selected} type="checkbox" onChange={() => opt.onclick(!opt.selected)}/>
            <label className="usa-checkbox__label" htmlFor={id_name}>{opt.label}</label>
          </div>
        )
      })}
      {/* <span>{title}</span>
      {options.map((opt) => <button key={opt.id} onClick={() => onClickFnc(opt.value)}>{opt.label}</button>)} */}
    </div>
  )
}

export default ResourceTableDisplay;