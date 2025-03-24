import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import ThemeTags from "./ThemeTags";

const DatasetDescription = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  return (
    <div className="mb-4">
      <div className="mb-4">
        <ThemeTags />
      </div>
      <div>
        {metadata?.description}
      </div>
    </div>
  )
}

export default DatasetDescription;