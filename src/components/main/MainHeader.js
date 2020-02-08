import React from 'react';

class MainHeader extends React.Component {
  render() {
    return(
      <div className="main-header">
        <div className="main-header__count">
          <span className="main-header__current">10</span> / <span className="main-header__total">800</span>
        </div>
        <div className="main-header__sort">
          <p className="main-header__heading">並び替え</p>
          <ul className="main-header__menu">
            <li className="main-header__list main-header__list--selected">おすすめ</li>
            <li className="main-header__list">新着</li>
            <li className="main-header__list">人気</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainHeader;