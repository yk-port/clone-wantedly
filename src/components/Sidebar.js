import React from 'react';

import AsideHeader from './sidebar/AsideHeader';
import SideSearch from './sidebar/SideSearch';
import SeachFilter from './sidebar/SeachFilter';
import SearchTerms from './sidebar/SearchTerms';
import RecommendSearch from './sidebar/RecommendSearch';
import SelectSearch from './sidebar/SelectSearch';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      termsLists: [
        { id: 1, terms: '未経験', tag: 'recommend', selected: true },
        { id: 2, terms: 'フロントエンド', tag: 'recommend', selected: false },
        { id: 3, terms: 'JavaScript', tag: 'recommend', selected: false },
        { id: 4, terms: 'Rails', tag: 'recommend', selected: true },
        { id: 5, terms: 'サーバーサイド', tag: 'recommend', selected: false },
        { id: 6, terms: 'React', tag: 'recommend', selected: false },
      ],
    };
  }

  render() {
    return(
      <aside className="aside">
        <div className="aside__wrap">
          <AsideHeader />
          <div className="aside-contents">
            <SideSearch />
            <SeachFilter />
            <SearchTerms
              termsLists={this.state.termsLists} />
            <RecommendSearch
              termsLists={this.state.termsLists} />
            <SelectSearch />
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;