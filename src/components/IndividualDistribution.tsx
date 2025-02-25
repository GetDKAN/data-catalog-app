import { useContext } from "react";
import { MetadataContext, DatastoreWrapper } from "@civicactions/data-catalog-components";
import DataTable from "./DataTable";


const IndividualDistribution = ({distribution}) => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const distributions = metadata?.distribution;
  const index = distributions.findIndex((dist) => dist.identifier === distribution.identifier);
  const isCSV = distributions[index].data.mediaType === "text/csv";
  return(
    <div>
      {distribution.data?.title && (
        <h3>{distribution.data.title}</h3>
      )}
      <a href={`${distribution.data?.downloadURL}`}>{distribution.data?.downloadURL}</a>
      {isCSV && (
        <DatastoreWrapper id={metadata.identifier} dist_index={index} rootUrl={'https://demo.getdkan.org/api/1'}>
          <DataTable distributionId={distribution.identifier} />
        </DatastoreWrapper>
        
      )}
    </div>
  );
}

export default IndividualDistribution;
