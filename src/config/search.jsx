import React from 'react';

export const defaultFacets = {
  "theme": {
    "label": "Topics",
    "field": "theme.0.title",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "keyword": {
    "label": "Tags",
    "field": "keyword.*.title",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "publisher__name": {
    "label": "Publishers",
    "field": "publisher__name",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  }
}

export const sortOptions = [
  {
    field: 'modified',
    order: 'desc',
    label: 'Date'
  },
  {
    field: 'title',
    order: 'asc',
    label: 'Alphabetical'
  }
];
