import React from 'react';
import profileImg from '../../assets/img/profile-img.png';
import LogoTitle from './elements/LogoTitle';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__nav-title">
            <LogoTitle />
            <ul className="header__nav-menu">
              <li className="header__nav-item header__nav-item--active">
                <a href="/">Курсы</a>
              </li>
              <li className="header__nav-item">
                <a href="/">Тестирования</a>
              </li>
              <li className="header__nav-item">
                <a href="/">События</a>
              </li>
              <li className="header__nav-item header__nav-item--gray">
                <a href="/">База знаний</a>
              </li>
              <li className="header__nav-item header__nav-item--gray">
                <a href="/">Пользователи</a>
              </li>
              <li className="header__nav-item header__nav-item--gray">
                <a href="/">Отчеты</a>
              </li>
            </ul>
          </div>
          <div className="header__profile">
            <div className="header__profile-img">
              <img src={profileImg} alt="Изображение профиля" />
            </div>
            <div className="header__profile-description">
              <div className="header__profile-name">Виталий Лавов</div>
              <div className="header__profile-role">Сотрудник</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
