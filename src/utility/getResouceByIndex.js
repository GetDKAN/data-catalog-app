import axios from 'axios'
import qs from 'qs';

export function getResourceByIndex(api_url, id, index, limit) {
  return axios({
    method: "GET",
    url: `${api_url}/datastore/query/${id}/${index}`,
    params: {
      limit: limit ?? null,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNulls: true });
    }
  })
  .then((res) => res.data)
}