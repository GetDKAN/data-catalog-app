import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import PublisherCard from "./PublisherCard";
import publishers from "../assets/publishers.json";

type DatasetPublisherProps = {
  data: {
    "@type": string;
    name: string;
  }
}

function findPublisher(publisherName: string) {
  return publishers.find((publisher) => publisher.name === publisherName);
}

const DatasetPublisherInfo = ({ data }: DatasetPublisherProps) => {
  const { name } = data;
  let publisher = name ? findPublisher(name) : null;
  return(
    <div>
      {publisher &&
        <PublisherCard publisher={publisher} />
      }
    </div>
  )
}

export default DatasetPublisherInfo;
