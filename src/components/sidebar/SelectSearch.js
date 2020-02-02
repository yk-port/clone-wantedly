import React from 'react';

class SelectSearch extends React.Component {
  handleClickAddTerms(id) {
    this.props.onAddTerms(id)
  }

  renderTerms(tag) {
    let searchTermsDom = this.props.termsLists.map(termsList => {
      if (termsList.tag === tag && !termsList.selected) {
        return (
          <li className="select-search__list"
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
      <React.Fragment>
        <div className="select-search">
          <p className="select-search__heading">分野</p>
          <ul className="select-search__menu">
            {this.renderTerms('category')}
          </ul>
        </div>

        <div className="select-search">
          <p className="select-search__heading">地域</p>
          <ul className="select-search__menu">
            {this.renderTerms('area')}
          </ul>
        </div>

        <div className="select-search">
          <p className="select-search__heading">特徴</p>
          <ul className="select-search__menu">
            {this.renderTerms('feature')}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectSearch;