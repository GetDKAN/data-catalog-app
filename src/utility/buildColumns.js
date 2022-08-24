import { createColumnHelper } from '@tanstack/react-table'

export function buildColumns(schema, id) {
  const columnHelper = createColumnHelper()
  const {fields} = schema[id]
  const fieldKeys = Object.keys(fields);
  return fieldKeys.map((key) => columnHelper.accessor(
    key,
    {
      header: fields[key].description ?? key,
    }
  ))
}