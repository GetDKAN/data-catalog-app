import { useContext } from "react";
import { MetadataContext, DatastoreWrapper } from "@civicactions/data-catalog-components";
import IndividualDistribution from "./IndividualDistribution";

const Distributions = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const distributions = metadata?.distribution;
  if (!distributions || distributions.length === 0) {
    return null;
  }
  return(
    <div>
      <h2>distributions</h2>
      <ul>
        {distributions.map((dist) => (
          <li key={dist.identifier}>
            <IndividualDistribution distribution={dist} metadata={metadata} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Distributions;

