import { useContext } from "react";
import ReactPaginate from 'react-paginate';
import { DatastoreContext } from "@civicactions/data-catalog-components";
import { paginationClasses } from "../theme/tailwindClasses";

const DistributionPagination = () => {
  const datastoreContext = useContext(DatastoreContext);
  const { count, limit, offset } = datastoreContext;
  const total = count
  const pageSize = limit.value;
  const pageCount = total ? Math.ceil(total / pageSize) : 0;
  function handlePageClick(event) {
    offset.set(event.selected * limit.value)
  }

  return(
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={paginationClasses.container}
        pageLinkClassName={paginationClasses.link}
        activeLinkClassName={paginationClasses.current}
        pageClassName=""
        nextClassName={paginationClasses.link}
        previousClassName={paginationClasses.link}
      />
    </div>
  )
}

export default DistributionPagination;
