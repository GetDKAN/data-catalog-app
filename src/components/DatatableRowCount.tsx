type DatatableRowCountProps = {
  count: number | undefined;
  limit: number;
  offset: number;
}

const DatatableRowCount = ({count, limit, offset}: DatatableRowCountProps) => {
  const offsetPlusLimit = offset + limit
  const offsetPlusOne = offset + 1
  return (
    <span className="block mb-4">
      {offsetPlusOne}-{count && count <= offsetPlusLimit ? count : offsetPlusLimit} of {count} rows
    </span>
  )
}

export default DatatableRowCount;
