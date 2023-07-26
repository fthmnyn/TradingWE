import React from 'react';

const SearchComponent = () => {
  return (
    <div className="search-container" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="autocomplete-container" style={{ margin: '0px auto 72px' }}>
        <div className="form-control-container" style={{ textAlign: 'center' }}>
          <div
            className="input-base-container"
            style={{ margin: '0px auto', display: 'flex', justifyContent: 'center' }}
          >
            <div className="input-adornment-container" style={{ textAlign: 'left' }}>
              <svg className="search-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
            <input
              type="text"
              aria-invalid="false"
              autoComplete="new-password"
              placeholder="Search Stocks"
              value=""
              className="search-input"
              aria-autocomplete="list"
              autoCapitalize="none"
              spellCheck="false"
              id="search-stocks-input"
              style={{ textAlign: 'center' }}
            />
            <div className="autocomplete-end-adornment"></div>
            <fieldset
              aria-hidden="true"
              style={{ paddingLeft: '8px', textAlign: 'center', margin: '0px auto' }}
              className="input-outline"
            >
              <legend className="input-outline-legend" style={{ width: '0.01px' }}>
                <span>​</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <button className="search-button" tabIndex="-1" type="button" disabled="">
        <span className="search-button-label">Research</span>
      </button>
    </div>
  );
};

export default SearchComponent;
