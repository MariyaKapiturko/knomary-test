import React from 'react';
import profileImg from './profile-img.png';

function App() {
  return (
    <>
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
      <main className="main">
        <section>
          <h1>Назначенное обучение</h1>
          <nav className="main__filter">
            <ul>
              <li className="main__filter-item main__filter-item--active">
                Все
                <div className="main__filter-item-counter">8</div>
              </li>
              <li className="main__filter-item">
                Курсы
                <div className="main__filter-item-counter">5</div>
              </li>
              <li className="main__filter-item">
                Тесты
                <div className="main__filter-item-counter">2</div>
              </li>
              <li className="main__filter-item">
                События
                <div className="main__filter-item-counter">1</div>
              </li>
            </ul>
          </nav>
          <div className="main__filter-cards">
            <div className="main__filter-card">
              <div className="main__filter-img">
                <img src="https://via.placeholder.com/330x200" alt="" />
              </div>
              <div className="main__filter-description">
                <div>
                  <div className="main__filter-progress-bar">1</div>
                  <div className="main__filter-title">24-часовой рабочий день</div>
                </div>
                <div className="main__filter-date">Доступен до: 20.04.2021</div>
              </div>
            </div>
            <div className="main__filter-card">
              <div className="main__filter-img">
                <img src="https://via.placeholder.com/330x200" alt="" />
              </div>
              <div className="main__filter-description">
                <div>
                  <div className="main__filter-progress-bar">2</div>
                  <div className="main__filter-title">
                    Эксперт назвал способ навсегда покончить с нападками
                  </div>
                </div>
                <div className="main__filter-date">Доступен до: 25.04.2021</div>
              </div>
            </div>
            <div className="main__filter-card">
              <div className="main__filter-img">
                <img src="https://via.placeholder.com/330x200" alt="" />
              </div>
              <div className="main__filter-description">
                <div>
                  <div className="main__filter-progress-bar">3</div>
                  <div className="main__filter-title">
                    Агрегаторы станут нести ответственность за услуги
                  </div>
                </div>
                <div className="main__filter-date">Доступен до: 27.04.2021</div>
              </div>
            </div>
            <div className="main__filter-card">
              <div className="main__filter-img">
                <img src="https://via.placeholder.com/330x200" alt="" />
              </div>
              <div className="main__filter-description">
                <div>
                  <div className="main__filter-progress-bar">4</div>
                  <div className="main__filter-title">Упаковка и маркировка товара</div>
                </div>
                <div className="main__filter-date">Доступен до: 05.05.2021</div>
              </div>
            </div>
            <div className="main__filter-card">
              <div className="main__filter-img">
                <img src="https://via.placeholder.com/330x200" alt="" />
              </div>
              <div className="main__filter-description">
                <div>
                  <div className="main__filter-progress-bar">5</div>
                  <div className="main__filter-title">Теории Зигмунда Фрейда и Альфреда Адлера</div>
                </div>
                <div className="main__filter-date">Доступен до: 10.05.2021</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1>Новости</h1>
        </section>
      </main>
    </>
  );
}

export default App;
