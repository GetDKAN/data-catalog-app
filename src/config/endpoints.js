export const dkanEndpoints = {
  // Put site URL here or process.env.REACT_APP_ROOT_URL
  siteUrl: process.env.REACT_APP_ROOT_URL,
  apiPath: '/api/1',
  get api() {
    return `${this.siteUrl}${this.apiPath}`;
  },
  get datastore() {
    // Requires a POST request with the request data
    return `${this.api}/datastore/query`;
  },
  get search() {
    // example: ?${apiParams}
    return `${this.api}/search`;
  },
  get facets() {
    // You can append Search API parameters to the facets endpoint.
    // The endpoint also takes a special &facets= where only listed facets will be returned.
    // example: `?${apiParams}&facets=${facet}`
    return `${this.api}/facets`;
  },
  metastoreSchemas: function(schema = '') {
    if (!schema) {
      return `${this.api}/metastore/schemas`;
    }
    return `${this.api}/metastore/schemas/${schema}`;
  },
  metastoreItems: function(schema, id, showReferenceIds = true) {
    if (!schema) {
      throw 'Must include schema';
    }
    if (!id && !showReferenceIds) {
      return `${this.api}/metastore/schemas/${schema}/items`;
    }
    if (!id) {
      return `${this.api}/metastore/schemas/${schema}/items?show-reference-ids`;
    }
    if (!showReferenceIds) {
      return `${this.api}/metastore/schemas/${schema}/items/${id}`;
    }
    return `${this.api}/metastore/schemas/${schema}/items/${id}?show-reference-ids`;
  },
  get sql() {
    // This needs a SQL query added to the url as a search param
    // example: ?query=[]
    return `${this.api}/datastore/sql`;
  }
}



