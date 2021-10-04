import React from 'react';
import profileImg from './profile-img.png';

function App() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <a href="/">
            <div className="header__logo-text">Knomary</div>
            <div className="header__logo-heading">test</div>
          </a>
        </div>
        <nav className="header__nav">
          <ul>
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
        </nav>
      </div>
      <div className="header__right">
        <div className="header__profile">
          <div className="header__profile-img">
            <img src={profileImg} alt="Изображение профиля" />
          </div>
          <div className="header__profile-description">
            <div className="header__profile-name">Виталий Лавов</div>
            <div className="header__profile-role">Сотрудник</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
