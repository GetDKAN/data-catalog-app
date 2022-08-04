import React from 'react';

const Spinner = ({loading, contentLoadingText, contentLoadedText}) => {
  return (
    <div className={`spinner ${!loading ? "-loaded" : ""}`} role="alert" aria-live="assertive">
      <p className="visually-hidden">
        {loading ? contentLoadingText : contentLoadedText}
      </p>
    </div>
  )
};

Spinner.defaultProps = {
  contentLoadingText: "Content is loading...",
  contentLoadedText: "Content has loaded.",
  loading: true,
}

export default Spinner;
