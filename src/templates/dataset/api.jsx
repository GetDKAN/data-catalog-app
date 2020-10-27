import React from "react";
import { Link } from "@reach/router";
import Loader from "react-loader-advanced";
import LoadingSpin from "react-loading-spin";
import {
  ApiDocs,
  Organization
} from "@civicactions/data-catalog-components";
import config from "../../assets/config";
import orgs from "../../assets/publishers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Layout from "../../components/Layout";

const ApiDocsSpecific = ({ id, location }) => {
  const { state } = location;
  const [item, setItem] = React.useState(state && state.dataset ? state.dataset : {});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if(state && state.dataset) {
      setLoading(false);
    } else {
      axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items/${id}?show-reference-ids`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
    }
  }, [id, state])


    const orgName = "publisher" in item && item.publisher.data ? item.publisher.data.name : "";
    const orgDetails = orgs.filter(org => orgName === org.name);
    const orgImage = orgDetails.length && orgDetails[0].imageUrl ? orgDetails[0].imageUrl : "";
    const orgDesc = orgDetails.length && orgDetails[0].description ? orgDetails[0].description : "";
    let renderOrg;
    if(orgDetails.length > 0 && orgDetails[0].imageUrl) {
      renderOrg = <Organization name={orgName} imageUrl={orgImage} description={orgDesc}/>;
    } else {
      renderOrg = <Organization name={orgName} description={orgDesc}/>;
    }
  return (
    <Layout title="Dataset API">
    <div className={`dc-dataset-page ${config.container}`}>
       <Loader
          backgroundStyle={{ backgroundColor: "#f9fafb" }}
          foregroundStyle={{ backgroundColor: "#f9fafb" }}
          show={loading}
          message={
            <LoadingSpin width={"3px"} primaryColor={"#007BBC"} />
          }
        >
      <div className="row">

          <div className="col-md-3 col-sm-12">
            {renderOrg}
            <div className="dc-block-wrapper">
              <FontAwesomeIcon
                icon={['fas', 'arrow-left']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              Back to the{" "}
              <Link
                to={`/dataset/${id}`}
                state={{dataset: {...item}}}
              >
                dataset
              </Link>
              .
            </div>
          </div>
          <div className="results-list col-md-9 col-sm-12">
            <h1>{item.title}</h1>
            <ApiDocs
              endpoint={
                `${process.env.REACT_APP_ROOT_URL}` +
                "/metastore/schemas/dataset/items/" +
                id +
                "/docs"
              }
            />
          </div>

      </div>
      </Loader>
    </div>
    </Layout>
  );
}

export default ApiDocsSpecific;
