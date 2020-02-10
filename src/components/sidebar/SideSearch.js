import React from 'react';
import SearchHistory from './SearchHistory';

class SideSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchHistory: false,
    }
  }

  handleClickShowSearchHistory() {
    let showFlag = this.state.showSearchHistory;
    this.setState({ showSearchHistory: !showFlag ? true : false });
  }

  render() {
    return(
      <div className="side-search">
        <div className="side-search__label">
          <span className="side-search__title">検索条件</span>
          <span onClick={() => this.handleClickShowSearchHistory()}>
            <i className="fas fa-clipboard"></i>
          </span>
        </div>
        <SearchHistory
          show={this.state.showSearchHistory} />
        <div className="side-search__input">
          <button type="submit" className="side-search__submit"><i className="fas fa-search"></i></button>
          <input type="text" className="side-search__box" placeholder="キーワードで検索" />
        </div>
      </div>
    );
  }
}

export default SideSearch;