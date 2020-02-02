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
        { id: 1, terms: '未経験', tag: 'recommend', selected: false },
        { id: 2, terms: 'フロントエンド', tag: 'recommend', selected: false },
        { id: 3, terms: 'JavaScript', tag: 'recommend', selected: false },
        { id: 4, terms: 'Rails', tag: 'recommend', selected: false },
        { id: 5, terms: 'サーバーサイド', tag: 'recommend', selected: false },
        { id: 6, terms: 'React', tag: 'recommend', selected: false },
        { id: 7, terms: 'webエンジニア', tag: 'category', selected: false },
        { id: 8, terms: 'モバイルエンジニア', tag: 'category', selected: false },
        { id: 9, terms: 'インフラエンジニア', tag: 'category', selected: false },
        { id: 10, terms: '東京', tag: 'area', selected: false },
        { id: 11, terms: '海外', tag: 'area', selected: false },
        { id: 12, terms: 'リモート', tag: 'area', selected: false },
        { id: 13, terms: 'TechCrunchに掲載実績あり', tag: 'feature', selected: false },
        { id: 14, terms: '海外進出している', tag: 'feature', selected: false },
        { id: 15, terms: '1億円以上の資金を調達済み', tag: 'feature', selected: false },
      ],
    };
  }

  onDeleteTerms(id) {
    let _state = Object.assign({}, this.state);
    let selectedTerms = _state.termsLists.find(termsList => {
      return termsList.id === id;
    });
    selectedTerms.selected = false;
    this.setState({ _state });
  }

  onAddTerms(id) {
    let _state = Object.assign({}, this.state);
    let selectedTerms = _state.termsLists.find(termsList => {
      return termsList.id === id;
    });
    selectedTerms.selected = true;
    this.setState({ _state });
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
              termsLists={this.state.termsLists}
              onDeleteTerms={(id) => this.onDeleteTerms(id)} />
            <RecommendSearch
              termsLists={this.state.termsLists}
              onAddTerms={(id) => this.onAddTerms(id)} />
            <SelectSearch
              termsLists={this.state.termsLists}
              onAddTerms={(id) => this.onAddTerms(id)} />
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;