import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";

const KeywordTags = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const keywords = metadata?.keyword;
  if (!keywords || keywords.length === 0) {
    return null;
  }
  return (
    <div>
      <h2>Keywords</h2>
      <ul>
        {keywords.map((keyword) => <li key={keyword.identifier}>{keyword.data}</li>)}
      </ul>
    </div>
  )
}

export default KeywordTags;
