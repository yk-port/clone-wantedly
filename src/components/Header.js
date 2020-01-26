import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header__wrap">
        <a href="index.html#root" className="header__logo"><div className="icon"></div></a>
        <ul className="header__nav">
          <li><a href="#" className="header__list">募集をみる</a></li>
          <li><a href="#" className="header__list">フィードをみる</a></li>
          <li><a href="#" className="header__list">プロフィール</a></li>
          <li><a href="#" className="header__list">ツール</a></li>
        </ul>
        <form action="" className="header-search">
          <input type="text" className="header-search__box" placeholder="人や会社、募集を検索" />
          <button type="submit" className="header-search__submit"><i className="fas fa-search fa-lg"></i></button>
        </form>
        <div className="header__notice">
          <button className="header__notice-icon"><i className="fas fa-comment-dots"></i></button>
          <button className="header__notice-icon"><i className="fas fa-user-alt"></i></button>
          <button className="header__notice-icon"><i className="fas fa-bell"></i></button>
          <img src="../images/person.jpg" alt="" className="header__avatar" />
        </div>
        <div className="header__info">
          <a href="#">
            <p>Premiumを試す</p>
            <p>30日間無料で体験</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;