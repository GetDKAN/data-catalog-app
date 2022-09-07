import React from 'react';
import FormatIcon from '../../assets/FormatIcons';
import { DatasetDistributionData } from '../../types/Metadata.types';

type ResourceDownloadType = {
  data: DatasetDistributionData
}

const ResourceDownload = ({data}: ResourceDownloadType) => {
  const { title, downloadURL, format} = data;
  return (
    <div className="dc-file-download">
      <FormatIcon format={format} />
      <a href={downloadURL}>{title}</a>
    </div>
  )
}

export default ResourceDownload