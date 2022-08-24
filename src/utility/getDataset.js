import axios from 'axios';

export function getDataset(api_url, id) {
  return axios({
    method: "GET",
    url: `${api_url}/metastore/schemas/dataset/items/${id}?show-reference-ids`
  })
  .then((res) => res.data)
}