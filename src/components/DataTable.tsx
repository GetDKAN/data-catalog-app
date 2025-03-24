import { useContext, useMemo, useState } from "react";
import { DatastoreContext } from "@civicactions/data-catalog-components";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

const DataTable = ({distributionId}) => {
  const datastoreContext = useContext(DatastoreContext);
  // const [results, setResults] = useState([]);
  const datastore = datastoreContext.datastore;
  // if(datastoreContext.status === "pending") {
  //   return null;
  // }
  
  const columnHelper = createColumnHelper<any>()

  let results = datastore?.results ? datastore.results : [];

  const fields = datastore?.schema[distributionId]?.fields;
  
  const columns = useMemo(() => {
    let newCols = []
    if(fields && Object.keys(fields).length > 0) {
    
      newCols = Object.keys(fields).map((key) => {
        return columnHelper.accessor(key, {
          cell: info => info.getValue(),
        })
      })
      
    }
    return newCols;
  }, [fields])
  const table = useReactTable({
    data: results,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table className="table-auto">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
