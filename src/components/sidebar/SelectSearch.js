import React from 'react';

class SelectSearch extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="select-search">
          <p className="select-search__heading">分野</p>
          <ul className="select-search__menu">
            <li className="select-search__list">webエンジニア</li>
            <li className="select-search__list">モバイルエンジニア</li>
            <li className="select-search__list">インフラエンジニア</li>
          </ul>
        </div>

        <div className="select-search">
          <p className="select-search__heading">地域</p>
          <ul className="select-search__menu">
            <li className="select-search__list">東京</li>
            <li className="select-search__list">関東</li>
            <li className="select-search__list">リモート</li>
          </ul>
        </div>

        <div className="select-search">
          <p className="select-search__heading">特徴</p>
          <ul className="select-search__menu">
            <li className="select-search__list">TechCrunchに掲載実績あり</li>
            <li className="select-search__list">海外進出している</li>
            <li className="select-search__list">１億円以上の資金を調達済み</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectSearch;