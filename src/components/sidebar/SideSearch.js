import React from 'react';

class SideSearch extends React.Component {
  render() {
    return(
      <div className="side-search">
        <div className="side-search__label">
          <span>検索条件</span>
          <span><i className="fas fa-clipboard"></i></span>
        </div>
        <div className="side-search__input">
          <button type="submit" className="side-search__submit"><i className="fas fa-search"></i></button>
          <input type="text" className="side-search__box" placeholder="キーワードで検索" />
        </div>
      </div>
    );
  }
}

export default SideSearch;