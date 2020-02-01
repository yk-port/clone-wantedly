import React from 'react';

class RecommendSearch extends React.Component {
  renderTerms() {
    let searchTermsDom = this.props.termsLists.map(termsList => {
      if (!termsList.selected) {
        return (
          <li className="recommend-search__list" key={termsList.id}>
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
          {this.renderTerms()}
        </ul>
      </div>
    );
  }
}

export default RecommendSearch;
