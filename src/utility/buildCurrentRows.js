export function buildCurrentRows(count, offset, limit) {
  let start = 0;
  let end = 0;
  const page = offset / limit;
  if(count !== 0) {
    start = page * limit + 1;
    if(offset === 0) {
      end = limit;
    } else if(limit >= count || limit + offset >= count) {
      end = count;
    }  else {
      end = offset + limit;
    }
  }

  return {
    start,
    end
  }
}