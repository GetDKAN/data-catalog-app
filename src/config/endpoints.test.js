import { dkanEndpoints } from './endpoints';

describe('API Endpoint Config Object', () => {
  test('has correct base urls', () => {
    expect(dkanEndpoints.siteUrl).toBe('http://dkan.org');
    expect(dkanEndpoints.apiPath).toBe('/api/1');
    expect(dkanEndpoints.api).toBe('http://dkan.org/api/1');
  });
  
  test('has correct search urls', () => {
    expect(dkanEndpoints.search).toBe('http://dkan.org/api/1/search');
    expect(dkanEndpoints.search).toBe('http://dkan.org/api/1/search');
  });
  
  test('has correct datastore urls', () => {
    expect(dkanEndpoints.datastore).toBe('http://dkan.org/api/1/datastore/query');
    expect(dkanEndpoints.sql).toBe('http://dkan.org/api/1/datastore/sql');
  });
  
  test('has correct metastore urls', () => {
    expect(dkanEndpoints.metastoreSchemas()).toBe('http://dkan.org/api/1/metastore/schemas');
    expect(dkanEndpoints.metastoreSchemas('datasets')).toBe('http://dkan.org/api/1/metastore/schemas/datasets');

    expect(() => dkanEndpoints.metastoreItems()).toThrow('Must include schema');
    expect(dkanEndpoints.metastoreItems('datasets')).toBe('http://dkan.org/api/1/metastore/schemas/datasets/items?show-reference-ids');
    expect(dkanEndpoints.metastoreItems('datasets', '1234')).toBe('http://dkan.org/api/1/metastore/schemas/datasets/items/1234?show-reference-ids');
    expect(dkanEndpoints.metastoreItems('datasets', '1234', false)).toBe('http://dkan.org/api/1/metastore/schemas/datasets/items/1234');
    expect(dkanEndpoints.metastoreItems('datasets', null, false)).toBe('http://dkan.org/api/1/metastore/schemas/datasets/items');
  });
})
