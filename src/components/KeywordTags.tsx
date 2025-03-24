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
    <div className="py-6">
      <h2 className="font-bold text-lg mb-2">Tags</h2>
      <ul>
        {keywords.map((keyword) => (
          <li
            className="inline-flex items-center justify-center gap-1 rounded bg-sky-900 px-1.5 text-white mr-2"
            key={keyword.identifier}>
            {keyword.data}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeywordTags;
