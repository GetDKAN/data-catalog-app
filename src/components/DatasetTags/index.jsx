import React from 'react';
import { Link } from 'react-router-dom';
import { MetadataKeyword } from '../../types/Metadata.types'

type DatasetTagsType = {
  tags: Array<MetadataKeyword>;
}

const DatasetTags = ({tags}: DatasetTagsType) => {
  if(Array.isArray(tags)) {
    return (
      <div>
        <h2>Tags</h2>
        {tags.length &&
          <ul className="usa-collection__meta">
            {tags.map((tag) => (
              <li
                className="usa-collection__meta-item usa-tag"
                key={tag.identifier}
              >
                <Link
                  to={`/search?keyword=${tag.data}`}
                >
                  {tag.data}
                </Link>
              </li>
            ))}
          </ul>
        }
    </div>
    )
  }
  return null;
};

export default DatasetTags;
