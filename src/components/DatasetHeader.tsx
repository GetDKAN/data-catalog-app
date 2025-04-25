import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import ThemeTags from "./ThemeTags";

type DatasetHeaderProps = {
  title: string;
}

const DatasetHeader = ({title}: DatasetHeaderProps) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}

export default DatasetHeader;