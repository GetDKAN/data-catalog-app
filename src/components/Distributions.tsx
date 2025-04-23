import { useContext } from "react";
import { MetadataContext, DatastoreWrapper } from "@civicactions/data-catalog-components";
import IndividualDistribution from "./IndividualDistribution";

type DistributionsProps = {
  distributions: Array<any>;
  metadata: any;
}

const Distributions = ({distributions, metadata}: DistributionsProps) => {

  if (!distributions || distributions.length === 0) {
    return null;
  }
  return(
    <div>
      <ul>
        {distributions.map((dist, index) => (
          <li key={dist.identifier}>
            <IndividualDistribution distribution={dist} index={index} metadata={metadata} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Distributions;

