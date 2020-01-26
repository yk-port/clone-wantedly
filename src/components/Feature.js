import React from 'react';

function Feature() {
  return (
    <div className="feature">
      <div className="feature__wrap">
        <div className="feature-project">
          <img src="/images/office.jpg" alt="" className="feature-project__image" />
          <div className="feature-project__body">
            <div className="feature-project__status">
              <span className="feature-project__tag">データサイエンティスト</span>
              <p className="feature-project__entry"><span className="feature-project__count">56</span>エントリー</p>
            </div>
            <h2 className="feature-project__copyright">全企業の99.7％を占める中堅・中小企業の課題は日本の課題そのもの。知られざるコマーシャル営業の魅力とは？</h2>
            <div className="feature-project__content">
              <div className="feature-project__company">
                <img src="/images/company-logo.jpg" alt="" className="thumbnail" />
                <div className="company-name">株式会社セールスフォース・ドットコム</div>
              </div>
              <div className="feature-project__info">
                <button className="share"><i className="fas fa-bullhorn"></i></button>
                <button className="entry">1</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;