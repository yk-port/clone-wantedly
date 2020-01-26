import React from 'react';

class RecommendSearch extends React.Component {
  render() {
    return(
      <div className="recommend-search">
        <ul className="recommend-search__menu">
          <li className="recommend-search__list">フロントエンド</li>
          <li className="recommend-search__list">JavaScript</li>
          <li className="recommend-search__list">Rails</li>
          <li className="recommend-search__list">Angular</li>
          <li className="recommend-search__list">React</li>
        </ul>
      </div>
    );
  }
}

export default RecommendSearch;