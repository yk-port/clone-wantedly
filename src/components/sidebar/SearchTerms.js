import React from 'react';
import PropTypes from 'prop-types';

class SearchTerms extends React.Component {
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
      ],
    };

    renderTerms() {
      this.state.termsLists.forEach(termsList => {
        if (termsList.selected) {
          <div className="search-terms__selected">{termsList.term}</div>
        }
      });
    }
  }

  render() {
    return (
      <div className="search-terms" id="search-terms">
        {renderTerms()}
      </div>
    );
  }
}

SearchTerms.propTypes = {
  renderTerms: PropTypes.func.isRequired,
}

export default SearchTerms;
