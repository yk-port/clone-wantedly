import React from 'react';

class AsideHeader extends React.Component {
  render() {
    return(
      <div className="aside-header">
        <ul className="aside-header__menu">
          <li><a href="#" className="aside-header__list aside-header__list--selected">シゴト</a></li>
          <li><a href="#" className="aside-header__list">ミートアップ</a></li>
        </ul>
      </div>
    );
  }
}

export default AsideHeader;