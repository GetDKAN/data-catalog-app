import { useContext } from "react";
import ReactPaginate from 'react-paginate';
import { SearchPageContext } from "../common/contexts";
import { paginationClasses } from "../theme/tailwindClasses";

const SearchPagination = () => {
  const searchData = useContext(SearchPageContext);
  const total = searchData?.data?.total;
  const pageSize = searchData.pageSize.value;
  const pageCount = total ? Math.ceil(total / pageSize) : 0;
  function handlePageClick(event) {
    searchData.page.set(event.selected + 1)
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

export default SearchPagination;
