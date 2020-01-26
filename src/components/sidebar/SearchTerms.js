import React from 'react';

class SearchTerms extends React.Component {
  render() {
    return(
      <div className="search-terms" id="search-terms">
        <div className="search-terms__selected">未経験</div>
        <div className="search-terms__selected">フロントエンド</div>
      </div>
    );
  }
}

export default SearchTerms;