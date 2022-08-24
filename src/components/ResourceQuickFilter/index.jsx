import React from 'react'

const ResourceQuickFilter = ({isOpen, quickFilterClose}) => {
  if(!isOpen) {
    return null;
  }
  return (
    <div>
      <p>Quick filter stuff here</p>
      <button onClick={() => quickFilterClose(false)}></button>
    </div>
  )
}

export default ResourceQuickFilter