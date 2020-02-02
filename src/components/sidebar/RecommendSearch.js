import React from 'react';

class RecommendSearch extends React.Component {
  handleClickAddTerms(id) {
    this.props.onAddTerms(id);
  }

  renderTerms(tag) {
    let searchTermsDom = this.props.termsLists.map(termsList => {
      if (termsList.tag === tag && !termsList.selected) {
        return (
          <li className="recommend-search__list"
              key={termsList.id}
              onClick={() => this.handleClickAddTerms(termsList.id)} >
            {termsList.terms}
          </li>
        );
      }
    });
    return searchTermsDom;
  }

  render() {
    return (
      <div className="recommend-search">
        <ul className="recommend-search__menu">
          {this.renderTerms('recommend')}
        </ul>
      </div>
    );
  }
}

export default RecommendSearch;
