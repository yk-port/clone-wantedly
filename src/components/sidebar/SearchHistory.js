import React from 'react';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      histories: [
        { id: 1, label: 'React', offer: '中途採用', position: 'エンジニア', bookFlag: 0 },
        { id: 2, label: 'Rails', offer: 'インターン', position: 'エンジニア', bookFlag: 0 },
        { id: 3, label: 'マークアップ', offer: '業務委託', position: 'デザイナー', bookFlag: 0 },
        { id: 4, label: 'AWS', offer: '中途採用', position: 'エンジニア', bookFlag: 0 },
        { id: 5, label: 'カスタマーサクセス', offer: '中途採用', position: 'コーポレート', bookFlag: 0 },
        { id: 6, label: 'UI/UX', offer: '業務委託', position: 'デザイナー', bookFlag: 0 },
        { id: 7, label: 'スタートアップ', offer: '中途採用', position: 'ディレクター', bookFlag: 0 },
      ],
      currentBookFlagNumber: 0,
    }
  }

  handleClickListItem(id) {
    let _state = Object.assign({}, this.state);
    let listItem = _state.histories.find(history => {
      return history.id === id;
    });
    let currentBookFlagNumber = _state.currentBookFlagNumber + 1;
    if (listItem.bookFlag === 0) {
      
      console.log(currentBookFlagNumber);
      
      this.setState({ currentBookFlagNumber: 10 });

      console.log(this.state.currentBookFlagNumber);

    } else {
      this.setState({ currentBookFlagNumber: 0 });
    }
    this.setState(_state);
    console.log(_state);

    this.sortForSearchHistoryList(_state);
  }

  sortForSearchHistoryList(_state) {
    _state.histories.sort((a, b) => {
      if (a.bookFlag < b.b) {
        return 1;
      }
    });
  }

  renderSearchHistoryList() {
    let listDom = this.state.histories.map(history => (
      <li className="search-history__list"
          key={history.id}
          onClick={() => this.handleClickListItem(history.id)} >
        <div className="search-history__content">
          <p className="search-history__label">{history.label}</p>
          <p className="search-history__terms">
            <span>{history.label}</span>
            <span>{history.offer}</span>
            <span>{history.position}</span>
          </p>
        </div>
        <div className="search-history__icon">
          <i className="far fa-star fa-lg"></i>
        </div>
      </li>
    ));
    return listDom;
  }

  render() {
    if (this.props.show) {
      return (
        <div className="search-history">
          <ul className="search-history__body">
            {this.renderSearchHistoryList()}
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SearchHistory;
