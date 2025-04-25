import DataTable from "./DataTable";
import DatatableRowCount from "./DatatableRowCount";
import DistributionDownload from "./DistributionDownload";
import DatatableLimitSelect from "./DatatableLimitSelect";
import DistributionPagination from "./DatatablePagination";
import DatatableFilters from "./DatatableFilters";

const IndividualDistribution = ({distribution, index, metadata}) => {
  const isCSV = distribution.data.mediaType === "text/csv";
  
  return(
    <div>
      {distribution.data?.title && (
        <h2 className="font-bold text-lg mb-4">{distribution.data.title}</h2>
      )}
      <DistributionDownload distribution={distribution} />
      {isCSV && (
        <DataTable metadata={metadata} distribution={distribution} />

        //   <DatatableFilters />
        //   
      )}
    </div>
  );
}

export default IndividualDistribution;
