import React from 'react'
import QueryBuilderRow from '../QueryBuilderRow';

const QueryBuilder = () => {

  const [queryBuilderClosed, setQueryBuilderClosed] = React.useState(false);



  return(
    <div>
      <div className="usa-accordion usa-accordion--bordered">
        <h4 className="usa-accordion__heading">
          <button
            type="button"
            className="usa-accordion__button"
            aria-expanded={!queryBuilderClosed}
            aria-controls="query-builder"
            onClick={() => setQueryBuilderClosed(!queryBuilderClosed)}
          >
            Add a filter
          </button>
        </h4>
        <div id="query-builder" className="usa-accordion__content usa-prose" hidden={queryBuilderClosed}>
          <form>
            <QueryBuilderRow />
            <ul className="usa-button-group">
              <li className="usa-button-group__item">
                <button className="usa-button usa-button--outline" type="button">Clear filters</button>
              </li>
              <li className="usa-button-group__item">
                <button className="usa-button" type="submit">Apply filters</button>
              </li>
            </ul>


          </form>
        </div>
      </div>
    </div>
  )
}
export default QueryBuilder