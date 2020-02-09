import React from 'react';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      histories: [
        { label: 'React', offer: '中途採用', position: 'エンジニア' },
        { label: 'Rails', offer: 'インターン', position: 'エンジニア' },
        { label: 'マークアップ', offer: '業務委託', position: 'デザイナー' },
        { label: 'AWS', offer: '中途採用', position: 'エンジニア' },
        { label: 'カスタマーサクセス', offer: '中途採用', position: 'コーポレート' },
        { label: 'UI/UX', offer: '業務委託', position: 'デザイナー' },
        { label: 'スタートアップ', offer: '中途採用', position: 'ディレクター' },
      ],
    }
  }

  render() {
    if (this.props.show) {
      return (
        <div className="search-history">
          <ul className="search-history__body">
            {
              this.state.histories.map(history => {
                return (
                  <li className="search-history__list">
                    <div className="search-history__content">
                      <p className="search-history__label">{history.label}</p>
                      <p className="search-history__terms">
                        <span>{history.label}</span>
                        <span>{history.offer}</span>
                        <span>{history.position}</span>
                      </p>
                    </div>
                    <div className="search-history__icon">
                      <i class="far fa-star fa-lg"></i>
                    </div>
                  </li>
                );
              })
            }
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
