import React from 'react';

class Project extends React.Component {
  render() {
    return(
      <React.Fragment>
        <article className="project">
          <img src="../images/office.jpg" alt="" className="project__image" />
          <div className="project__body">
            <div className="project__status">
              <span className="project__tag">データサイエンティスト</span>
              <p className="project__entry"><span className="feature-project__count">56</span>エントリー</p>
            </div>
            <div className="project__text">
              <h2 className="project__copyright">全企業の99.7％を占める中堅・中小企業の課題は日本の課題そのもの。知られざるコマーシャル営業の魅力とは？</h2>
              <p className="project__description">私は経営者との対話を通じてお客様の成長を支援したいという、達成意欲の強い方と一緒に働きたいと願っています。もちろん、
                そのためのサポートは惜しみなく提供します。 コマーシャル営業での経験を通じて、多くの方々により大きな視野を身につけていただきたい。</p>
            </div>
            <div className="project__content">
              <div className="project__company">
                <img src="../images/company-logo.jpg" alt=""  className="thumbnail" />
                <div className="company-name">株式会社セールスフォース・ドットコム</div>
              </div>
              <div className="project__info">
                <button className="share">1</button>
                <button className="bookmark"><i className="far fa-bookmark"></i></button>
              </div>
            </div>
          </div>
        </article>

        <article className="project">
          <img src="../images/office.jpg" alt="" className="project__image" />
          <div className="project__body">
            <div className="project__status">
              <span className="project__tag">データサイエンティスト</span>
              <p className="project__entry"><span className="feature-project__count">56</span>エントリー</p>
            </div>
            <div className="project__text">
              <h2 className="project__copyright">全企業の99.7％を占める中堅・中小企業の課題は日本の課題そのもの。知られざるコマーシャル営業の魅力とは？</h2>
              <p className="project__description">私は経営者との対話を通じてお客様の成長を支援したいという、達成意欲の強い方と一緒に働きたいと願っています。もちろん、
                そのためのサポートは惜しみなく提供します。 コマーシャル営業での経験を通じて、多くの方々により大きな視野を身につけていただきたい。</p>
            </div>
            <div className="project__content">
              <div className="project__company">
                <img src="../images/company-logo.jpg" alt=""  className="thumbnail" />
                <div className="company-name">株式会社セールスフォース・ドットコム</div>
              </div>
              <div className="project__info">
                <button className="share">1</button>
                <button className="bookmark"><i className="far fa-bookmark"></i></button>
              </div>
            </div>
          </div>
        </article>

        <article className="project">
          <img src="../images/office.jpg" alt="" className="project__image" />
          <div className="project__body">
            <div className="project__status">
              <span className="project__tag">データサイエンティスト</span>
              <p className="project__entry"><span className="feature-project__count">56</span>エントリー</p>
            </div>
            <div className="project__text">
              <h2 className="project__copyright">全企業の99.7％を占める中堅・中小企業の課題は日本の課題そのもの。知られざるコマーシャル営業の魅力とは？</h2>
              <p className="project__description">私は経営者との対話を通じてお客様の成長を支援したいという、達成意欲の強い方と一緒に働きたいと願っています。もちろん、
                そのためのサポートは惜しみなく提供します。 コマーシャル営業での経験を通じて、多くの方々により大きな視野を身につけていただきたい。</p>
            </div>
            <div className="project__content">
              <div className="project__company">
                <img src="../images/company-logo.jpg" alt=""  className="thumbnail" />
                <div className="company-name">株式会社セールスフォース・ドットコム</div>
              </div>
              <div className="project__info">
                <button className="share">1</button>
                <button className="bookmark"><i className="far fa-bookmark"></i></button>
              </div>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default Project;