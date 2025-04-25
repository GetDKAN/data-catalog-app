import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import ThemeTags from "./ThemeTags";

type DatasetDescriptionProps = {
  description: string;
}

const DatasetDescription = ({description}: DatasetDescriptionProps) => {
  return (
    <div className="mb-4">
      <div className="mb-4">
        {/* <ThemeTags /> */}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default DatasetDescription;