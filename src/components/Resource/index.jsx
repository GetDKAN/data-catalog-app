import React from "react";
import {
  Resource,
  DataTable,
  FileDownload,
  DataTableHeader
} from "@civicactions/data-catalog-components";

const ResourceTemplate = ({ resource }) => {
  const type = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('mediaType') ? resource.data.mediaType.split("/") : '';
  const backup = type ? type[1] : 'data';
  const format = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('format') ? resource.data.format : backup;

  const downloadURL = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('downloadURL') ? resource.data.downloadURL : '';
  const accessURL = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('accessURL') ? resource.data.accessURL : downloadURL;
  const rootURL = `${process.env.REACT_APP_ROOT_URL}/`;

  return (
    <div id={`resource_${resource.identifier}`}>
      {format.toLowerCase() === 'csv'
        ? (
          <Resource
            apiURL={rootURL}
            identifier={resource.identifier}
            resource={resource}
            showDBColumnNames={true}
          >
            <FileDownload
              title={resource.data.title}
              label={resource.data.downloadURL}
              format={format}
              downloadURL={downloadURL ? downloadURL : accessURL}
            />
            <DataTableHeader />
            <DataTable />
          </Resource>
        )
        : (
          <FileDownload
            title={resource.data.title}
            label={resource.data.downloadURL}
            format={format}
            downloadURL={resource.data.downloadURL}
          />
        )
      }
    </div>
  );
};

export default ResourceTemplate;
