import React, { useContext, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { MetadataContext, DatastoreWrapper, MetadataWrapper } from "@civicactions/data-catalog-components";


// import ResourceTemplate from "../../components/Resource";
import { Spinner } from 'reactstrap';
// import {
//   Text,
//   Organization,
//   Table,
//   Tags,
//   TopicIcon,
//   TopicWrapper
// } from "@civicactions/data-catalog-components";
import orgs from "../../assets/publishers";

const Dataset = () => {
  const { id } = useParams();
  // const [hasWindow, checkForWindow] = useState(false);
  
  // useEffect(() => {
  //   if (window !== undefined) {
  //     checkForWindow(true);
  //   }
  // }, [id]);

  // const {data} = useQuery({
  //   queryKey: ['metastoreDataset', id],
  //   queryFn: () => {
  //     return fetch(`${import.meta.env.VITE_REACT_APP_ROOT_URL}/metastore/schemas/dataset/items/${id}?show-reference-ids`).then(
  //       (res) => res.json(),
  //     )
  //   }
  // });
  // const item = data ? data : {};

  // const orgName =
  //   "publisher" in item && item.publisher ? item.publisher.data.name : "";
  // const orgDetails = orgs.filter(org => orgName === org.name);
  // const orgImage = orgDetails.length > 0 && orgDetails[0].imageUrl ? orgDetails[0].imageUrl : null;
  // const orgDesc = orgDetails.length > 0 && orgDetails[0].description ? orgDetails[0].description : "";
  // let renderOrg;
  // if(orgDetails.length > 0 && orgDetails[0].imageUrl) {
  //   renderOrg = <Organization name={orgName} imageUrl={orgImage} description={orgDesc}/>;
  // } else {
  //   renderOrg = <Organization name={orgName} description={orgDesc}/>;
  // }


  // const tag = "keyword" in item ? item.keyword : [];
  // const theme = "theme" in item ? item.theme : [];

  // function themes(theme) {
  //   if (!theme) {
  //     return null;
  //   } else {
  //     return theme.map(topic => {
  //       return (
  //         <TopicWrapper component={TopicIcon} topic={topic.data} key={topic.identifier}/>
  //       );
  //     });
  //   }
  // }

  // // // Process content for 'Columns in this Dataset' table.
  // // // const labelsT2 = {};
  // // // const valuesT2 = {};

  // // // columns.forEach((value, index) => {
  // // //   labelsT2[index] = { label: value };
  // // //   valuesT2[index] = "String";
  // // // });

  // // // Process content for 'Additional Information' table.
  // const labelsT3 = {};
  // const valuesT3 = {};

  // if (orgName && orgName.length > 0) {
  //   labelsT3.publisher = { label: "Publisher" };
  //   valuesT3.publisher = orgName;
  // }
  // if ("identifier" in item && item.identifier) {
  //   labelsT3.identifier = { label: "Identifier" };
  //   valuesT3.identifier = item.identifier;
  // }
  // if ("issued" in item && item.issued) {
  //   labelsT3.issued = { label: "Issued" };
  //   valuesT3.issued = item.issued;
  // }
  // if ("modified" in item && item.modified) {
  //   labelsT3.modified = { label: "Last Update" };
  //   valuesT3.modified = item.modified;
  // }
  // if ("license" in item && item.license) {
  //   labelsT3.license = { label: "License" };
  //   valuesT3.license = `<a href="${item.license}">${item.license}</a>`;
  // }
  // if ("contactPoint" in item && item.contactPoint && item.contactPoint.fn) {
  //   labelsT3.contact = { label: "Contact" };
  //   valuesT3.contact = item.contactPoint.fn;
  // }
  // if (
  //   "contactPoint" in item &&
  //   item.contactPoint &&
  //   item.contactPoint.hasEmail
  // ) {
  //   labelsT3.email = { label: "Contact E-mail" };
  //   valuesT3.email = `<a href="${item.contactPoint.hasEmail}">${item.contactPoint.hasEmail}</a>`;
  // }
  // if ("accessLevel" in item && item.accessLevel) {
  //   labelsT3.access = { label: "Public Access Level" };
  //   valuesT3.access = item.accessLevel;
  // }
  // if ("landingPage" in item && item.landingPage) {
  //   labelsT3.homepage = { label: "Homepage URL" };
  //   valuesT3.homepage = `<a href="${item.landingPage}">${item.landingPage}</a>`;
  // }
  return (
    <Layout title={`Dataset -`}>
      <MetadataWrapper
        rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}
        id={id}
      >
        <div>
          <DatasetHeader />
          <DownloadLinks />
          <DataTables />
          <Tags />
          <AdditionalInfoTable />
        </div>
      </MetadataWrapper>
      {/* <div className={`dc-dataset-page ${config.container}`}>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            {renderOrg}
            <div className="dc-block-wrapper">
              The information on this page is also available via the{" "}
              <Link
                to={`/dataset/${item.identifier}/api`}
                state={{ dataset: {...item} }}
              >
                API
              </Link>.
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
          {Object.keys(item).length
            ?(
            <div>
              <h1>{item.title}</h1>
            {theme.length > 0 && <div className="dc-item-theme">{themes(theme)}</div>}
            <Text value={item.description} />
            {(hasWindow && item.distribution) &&
              item.distribution.map(dist => {
                return <ResourceTemplate key={dist.identifier} resource={dist} identifier={dist.identifier} />;
              })}
            <Tags tags={tag} path="/search?keyword=" label="Tags" />
            <Table
              configuration={labelsT3}
              data={valuesT3}
              tableclass="metadata"
            /></div>
            ):( <div className="row">
            <Spinner color="primary" className="m-auto"/>
          </div>
        )}
          </div>
        </div>
      </div> */}
      </Layout>
  );
};

export default Dataset;

const DatasetHeader = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  return (
    <div>
      <h1>{metadata?.title}</h1>
      <Themes />
      <div>{metadata?.description}</div>
    </div>
  )
}

const Themes = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const themes = metadata?.theme;
  if (!themes || themes.length === 0) {
    return null;
  }
  return (
    <ul>
      {themes.map((theme) => <li key={theme.identifier}>{theme.data}</li>)}
    </ul>
  )
}

const DownloadLinks = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const distributions = metadata?.distribution;
  if (!distributions || distributions.length === 0) {
    return null;
  }
  return (
    <ul>
      {distributions.map((dist) => <li key={dist.identifier}><a href={`${dist.data?.downloadURL}`}>{dist.data?.downloadURL}</a></li>)}
    </ul>
  );
}

const Tags = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const keywords = metadata?.keyword;
  if (!keywords || keywords.length === 0) {
    return null;
  }
  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {keywords.map((keyword) => <li key={keyword.identifier}>{keyword.data}</li>)}
      </ul>
    </div>
  )
}

const AdditionalInfoTable = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  if (!metadata) {
    return null;
  }
  return (
    <div>
      <h2>Additional Information</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Publisher</td>
            <td>{metadata.publisher?.data.name}</td>
          </tr>
          <tr>
            <td>Identifier</td>
            <td>{metadata.identifier}</td>
          </tr>
          <tr>
            <td>Issued</td>
            <td>{metadata.issued}</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>{metadata.modified}</td>
          </tr>
          <tr>
            <td>License</td>
            <td>{metadata.license}</td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>{metadata.contactPoint?.fn}</td>
          </tr>
          <tr>
            <td>Contact Email</td>
            <td>{metadata.contactPoint?.hasEmail}</td>
          </tr>
          <tr>
            <td>Public Access Level</td>
            <td>{metadata.accessLevel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const DataTables = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const distributions = metadata?.distribution;
  if (!distributions || distributions.length === 0) {
    return null;
  }
  return (
    <div>
      {distributions.map((dist, index) => (
        <DatastoreWrapper key={dist.identifier}  id={metadata.identifier} dist_index={index} rootUrl={'https://demo.getdkan.org/api/1'}>
          {index}
        </DatastoreWrapper>
      ))}
    </div>
  );

}
