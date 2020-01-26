import React from 'react';

import AsideHeader from './sidebar/AsideHeader';
import SideSearch from './sidebar/SideSearch';
import SeachFilter from './sidebar/SeachFilter';
import SearchTerms from './sidebar/SearchTerms';
import RecommendSearch from './sidebar/RecommendSearch';
import SelectSearch from './sidebar/SelectSearch';

class Sidebar extends React.Component {
  render() {
    return(
      <aside className="aside">
        <div className="aside__wrap">
          <AsideHeader />
          <div className="aside-contents">
            <SideSearch />
            <SeachFilter />
            <SearchTerms />
            <RecommendSearch />
            <SelectSearch />
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;