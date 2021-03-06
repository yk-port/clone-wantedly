import React from 'react';

// import RecommendSearch from './RecommendSearch';
class SearchTerms extends React.Component {
  handleClickDeleteTerms(id) {
    this.props.onDeleteTerms(id);
  }

  renderTerms() {
    let searchTermsDom = this.props.termsLists.map(termsList => {
      if (termsList.selected) {
        return (
          <div className="search-terms__selected"
                key={termsList.id}
                onClick={() => this.handleClickDeleteTerms(termsList.id)} >
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
