import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import PublisherCard from "./PublisherCard";
import publishers from "../assets/publishers.json";

function findPublisher(publisherName: string) {
  return publishers.find((publisher) => publisher.name === publisherName);
}

const DatasetPublisherInfo = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const publisherName = metadata?.publisher?.data?.name;
  let publisher = publisherName ? findPublisher(publisherName) : null;
  return(
    <div>
      {publisher &&
        <PublisherCard publisher={publisher} />
      }
    </div>
  )
}

export default DatasetPublisherInfo;
