import React from 'react';
import profileImg from './profile-img.png';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <div className="header__nav-title">
              <h1>
                <div className="header__logo-text">Knomary</div>
                <div className="header__logo-heading">test</div>
              </h1>
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
      <main className="main">
        <section className="main__education">
          <h1 className="main__title">Назначенное обучение</h1>
          <nav className="main__filter">
            <ul className="main__filter-nav">
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
          <div className="table__wrapper">
            <div className="table__card">
              <div>
                <div className="table__img">
                  <img src="https://via.placeholder.com/330x200" alt="" />
                </div>
                <div className="table__progress-bar">1</div>
                <div className="table__title">24-часовой рабочий день</div>
              </div>
              <div>
                <div className="table__text">Доступен до: 20.04.2021</div>
              </div>
            </div>
            <div className="table__card">
              <div>
                <div className="table__img">
                  <img src="https://via.placeholder.com/330x200" alt="" />
                </div>
                <div className="table__progress-bar">2</div>
                <div className="table__title">24-часовой рабочий день</div>
              </div>
              <div>
                <div className="table__text">Доступен до: 20.04.2021</div>
              </div>
            </div>
            <div className="table__card">
              <div>
                <div className="table__img">
                  <img src="https://via.placeholder.com/330x200" alt="" />
                </div>
                <div className="table__progress-bar">3</div>
                <div className="table__title">24-часовой рабочий день</div>
              </div>
              <div>
                <div className="table__text">Доступен до: 20.04.2021</div>
              </div>
            </div>
            <div className="table__card">
              <div>
                <div className="table__img">
                  <img src="https://via.placeholder.com/330x200" alt="" />
                </div>
                <div className="table__progress-bar">4</div>
                <div className="table__title">24-часовой рабочий день</div>
              </div>
              <div>
                <div className="table__text">Доступен до: 20.04.2021</div>
              </div>
            </div>
            <div className="table__card">
              <div>
                <div className="table__img">
                  <img src="https://via.placeholder.com/330x200" alt="" />
                </div>
                <div className="table__progress-bar">5</div>
                <div className="table__title">24-часовой рабочий день</div>
              </div>
              <div>
                <div className="table__text">Доступен до: 20.04.2021</div>
              </div>
            </div>
          </div>
        </section>
        <section className="main__news">
          <h1 className="main__title">Новости</h1>
          <div className="table__wrapper">
            <div className="table__card">
              <div>
                <div className="table__img">
                  <img src="https://via.placeholder.com/330x200" alt="" />
                </div>
                <div className="table__title">24-часовой рабочий день</div>
                <div className="table__text">Доступен до: 20.04.2021</div>
              </div>
              <div>
                <div className="table__comments">Доступен до: 20.04.2021</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="header__nav-title">
          <h1>
            <div className="header__logo-text">Knomary</div>
            <div className="header__logo-heading">test</div>
          </h1>
        </div>
        <button className="button help__button">
          <div>Нужна помощь?</div>
        </button>
      </footer>
    </>
  );
}

export default App;
