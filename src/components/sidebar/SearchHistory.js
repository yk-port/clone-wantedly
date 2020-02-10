import React from 'react';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      histories: [
        { id: 1, label: 'React', offer: '中途採用', position: 'エンジニア', flag: false },
        { id: 2, label: 'Rails', offer: 'インターン', position: 'エンジニア', flag: false },
        { id: 3, label: 'マークアップ', offer: '業務委託', position: 'デザイナー', flag: false },
        { id: 4, label: 'AWS', offer: '中途採用', position: 'エンジニア', flag: false },
        { id: 5, label: 'カスタマーサクセス', offer: '中途採用', position: 'コーポレート', flag: false },
        { id: 6, label: 'UI/UX', offer: '業務委託', position: 'デザイナー', flag: false },
        { id: 7, label: 'スタートアップ', offer: '中途採用', position: 'ディレクター', flag: false },
      ],
    }
  }

  handleClickListItem(id) {
    console.log('handleClickListItem', id);
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
