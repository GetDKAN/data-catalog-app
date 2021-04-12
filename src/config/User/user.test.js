import React from 'react';
import {pathToJSONAPI} from './UserAction';

test('Converts a URL with an API path to one with JSONAPI path.', () => {
  expect(pathToJSONAPI("http://datamarinescotland.localtest.me/api/1"))
    .toEqual("http://datamarinescotland.localtest.me/jsonapi");
});
