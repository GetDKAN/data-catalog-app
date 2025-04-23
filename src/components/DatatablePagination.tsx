import ReactPaginate from 'react-paginate';
import { DatastoreParams } from '@civicactions/data-catalog-components';
import { paginationClasses } from "../theme/tailwindClasses";

type DatatablePaginationProps = {
  count: number;
  limit: number;
  offset: number;
  params: {
    set: Function;
    previous: DatastoreParams | undefined;
  };
}

const DatatablePagination = ({ count, limit, offset, params }: DatatablePaginationProps) => {
  const total = count
  const pageSize = limit;
  const pageCount = total ? Math.ceil(total / pageSize) : 0;
  const currentPage = Math.ceil(offset / pageSize);
  function handlePageClick(event) {
    console.log(offset, event, "handle")
    params.set({
      ...params.previous,
      offset: event.selected * limit,
    })
  }
  return(
    <div>
      <ReactPaginate
        initialPage={currentPage}
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

export default DatatablePagination;
