import { DatastoreWrapper } from "@civicactions/data-catalog-components";
import DataTable from "./DataTable";
import DatatableRowCount from "./DatatableRowCount";
import DistributionDownload from "./DistributionDownload";
import DatatableLimitSelect from "./DatatableLimitSelect";
import DistributionPagination from "./DistributionPagination";
import DatatableFilters from "./DatatableFilters";

const IndividualDistribution = ({distribution, index, metadata}) => {
  const isCSV = distribution.data.mediaType === "text/csv";
  return(
    <div>
      {distribution.data?.title && (
        <h2 className="font-bold text-lg mb-4">{distribution.data.title}</h2>
      )}
      
      {isCSV && (
        <DatastoreWrapper id={metadata.identifier} dist_id={distribution.identifier} dist_index={index} rootUrl={'https://dkan-dev.ddev.site/api/1'}>
          <DistributionDownload distribution={distribution} />
          <div className="flex justify-between">
            <DatatableRowCount />
            <DatatableLimitSelect />
          </div>
          <DatatableFilters />
          <DataTable distributionId={distribution.identifier} />
          <DistributionPagination />
        </DatastoreWrapper>
      )}
    </div>
  );
}

export default IndividualDistribution;
