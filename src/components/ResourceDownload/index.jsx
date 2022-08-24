import React from 'react';
import FormatIcon from '../../assets/FormatIcons';

const ResourceDownload = ({data}) => {
  const { title, downloadURL, format} = data;
  return (
    <div className="dc-file-download">
      <FormatIcon format={format} />
      <a href={downloadURL}>{title}</a>
    </div>
  )
}

export default ResourceDownload