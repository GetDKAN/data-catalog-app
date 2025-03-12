import { useContext } from "react";
import ReactPaginate from 'react-paginate';
import { SearchPageContext } from "../common/contexts";

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
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex"
        pageLinkClassName="p-2"
        pageClassName="border mx-2"
        nextClassName="hidden"
        previousClassName="hidden"
      />
    </div>
  )
}

export default SearchPagination;
