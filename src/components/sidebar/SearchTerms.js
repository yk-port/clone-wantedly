import React from 'react';

// import RecommendSearch from './RecommendSearch';
class SearchTerms extends React.Component {
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

  renderTerms() {
    let searchTermsDom = this.state.termsLists.map(termsList => {
      if (termsList.selected) {
        return (
          <div className="search-terms__selected" key={termsList.id}>
            {termsList.terms}
          </div>
        );
      }
    });
    return searchTermsDom;
  }

  render() {
    return (
      <div className="search-terms" id="search-terms">
        {this.renderTerms()}
      </div>
    );
  }
}

export default SearchTerms;
