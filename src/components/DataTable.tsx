import { useEffect, useMemo, useState } from "react";
import { useDatastore } from "@civicactions/data-catalog-components";

import { DatastoreContext } from "@civicactions/data-catalog-components";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DatatableRowCount from "./DatatableRowCount";
import DatatableLimitSelect from "./DatatableLimitSelect";
import DatatablePagination from "./DatatablePagination";
import DatatableFilters from "./DatatableFilters";

type DataTableProps = {
  distribution: any;
}

const DataTable = ({distribution}: DataTableProps) => {
  const columnHelper = createColumnHelper<any>()
  const rootUrl: string = import.meta.env.VITE_REACT_APP_ROOT_URL
  const defaultLimit: number = 10
  const { data, status, params } = useDatastore(rootUrl, distribution.identifier, distribution.identifier, {})//params: {limit: defaultLimit, offset: 0}
  const [results, setResults] = useState(data?.results ? data.results : []);
  const [schema, setSchema] = useState(data?.schema ? data.schema[distribution.identifier].fields : {} )

  useEffect(() => {
    if(data) {
      if(data?.results) {
        setResults(data.results)
      }
      if(Object.keys(schema).length === 0 && data.schema.hasOwnProperty(distribution.identifier)) {
        setSchema(data.schema[distribution.identifier].fields)
      }
    }

  }, [data])
  const columns = useMemo(() => {
    let newCols: Array<any> = []
    if(schema && Object.keys(schema).length > 0) {
    
      newCols = Object.keys(schema).map((key) => {
        return columnHelper.accessor(key, {
          cell: info => info.getValue(),
        })
      })
      
    }
    return newCols;
  }, [schema])

  const table = useReactTable({
    data: results,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  if(status === "pending") {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        <div className="flex justify-between">
          {data &&
            <>
              <DatatableRowCount
                limit={data.query.limit}
                offset={data.query.offset}
                count={data.count}
              />
              <DatatableLimitSelect limit={data.query.limit} id={distribution.identifier} params={params} />
            </>
          }
        </div>
        <DatatableFilters
          datastore={data}
          schema={schema}
          id={distribution.identifier}
          params={params}
        />
        <div className="max-w-full overflow-x-scroll">
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
        <DatatablePagination
          limit={data.query.limit}
          offset={data.query.offset}
          count={data.count}
          params={params}
        />
      </div>
      
    );
  }
  
}

export default DataTable;
