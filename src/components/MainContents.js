import React from 'react';

function MainContents () {
  return (
    <div id="main-contents">
      <div className="container">
        <div className="contents">

          <aside className="aside">
            <div className="aside__wrap">
              <div className="aside-header">
                <ul className="aside-header__menu">
                  <li><a href="#" className="aside-header__list aside-header__list--selected">シゴト</a></li>
                  <li><a href="#" className="aside-header__list">ミートアップ</a></li>
                </ul>
              </div>

              <div className="aside-contents">

                <div className="side-search">
                  <div className="side-search__label">
                    <span>検索条件</span>
                    <span><i className="fas fa-clipboard"></i></span>
                  </div>
                  <div className="side-search__input">
                    <button type="submit" className="side-search__submit"><i className="fas fa-search"></i></button>
                    <input type="text" className="side-search__box" placeholder="キーワードで検索" />
                  </div>
                </div>

                <div className="seach-filter">
                  <div className="seach-filter__selector">エンジニア<i className="fas fa-angle-down fa-lg"></i></div>
                  <div className="seach-filter__selector">中途採用<i className="fas fa-angle-down fa-lg"></i></div>
                </div>

                <div className="search-terms" id="search-terms">
                  <div className="search-terms__selected">未経験</div>
                  <div className="search-terms__selected">フロントエンド</div>
                </div>

                <div className="recommend-search">
                  <ul className="recommend-search__menu">
                    <li className="recommend-search__list">フロントエンド</li>
                    <li className="recommend-search__list">JavaScript</li>
                    <li className="recommend-search__list">Rails</li>
                    <li className="recommend-search__list">Angular</li>
                    <li className="recommend-search__list">React</li>
                  </ul>
                </div>

                <div className="select-search">
                  <p className="select-search__heading">分野</p>
                  <ul className="select-search__menu">
                    <li className="select-search__list">webエンジニア</li>
                    <li className="select-search__list">モバイルエンジニア</li>
                    <li className="select-search__list">インフラエンジニア</li>
                  </ul>
                </div>

                <div className="select-search">
                  <p className="select-search__heading">地域</p>
                  <ul className="select-search__menu">
                    <li className="select-search__list">東京</li>
                    <li className="select-search__list">関東</li>
                    <li className="select-search__list">リモート</li>
                  </ul>
                </div>

                <div className="select-search">
                  <p className="select-search__heading">特徴</p>
                  <ul className="select-search__menu">
                    <li className="select-search__list">TechCrunchに掲載実績あり</li>
                    <li className="select-search__list">海外進出している</li>
                    <li className="select-search__list">１億円以上の資金を調達済み</li>
                  </ul>
                </div>

              </div>
            </div>
          </aside>

          <main className="main">
            <div className="main__wrap">
              <div className="main-header">
                <div className="main-header__count">
                  <span className="main-header__current">10</span> /
                  <span className="main-header__total">800</span>
                </div>
                <div className="main-header__sort">
                  <p className="main-header__heading">並び替え</p>
                  <ul className="main-header__menu">
                    <li className="main-header__list main-header__list--selected">おすすめ</li>
                    <li className="main-header__list">新着</li>
                    <li className="main-header__list">人気</li>
                  </ul>
                </div>
              </div>

              <div className="main-contents">
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
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

export default MainContents;