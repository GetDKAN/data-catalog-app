import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import ThemeTags from "./ThemeTags";

const DatasetHeader = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  return (
    <div>
      <h1 className="text-2xl">{metadata?.title}</h1>
      <ThemeTags />
      <div>{metadata?.description}</div>
    </div>
  )
}

export default DatasetHeader;