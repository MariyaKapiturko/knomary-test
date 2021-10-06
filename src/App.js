import React from 'react';
import { PureComponent } from 'react';

import CardBase from './components/CardBase';
import Burger from './components/Burger';

import './assets/css/reset.css';
import './index.scss';

import educationData from './fake-data/education.json';
import newsData from './fake-data/news.json';
import { labelByType } from './constants/index';

import profileImg from './assets/img/profile-img.png';

const ALL = 'all';
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { filter: ALL, menuActive: false };
  }

  handleChangeFilter = (type) => {
    this.setState({ filter: type });
  };

  toggleMenuActive = () => {
    this.setState((prevState) => ({ menuActive: !prevState.menuActive }));
  };

  hideBurger = () => {
    this.setState({ menuActive: false });
  };

  render() {
    const { filter, menuActive } = this.state;
    const typeEducation = Array.from(new Set(educationData.map((element) => element.type)));
    const filteredData =
      filter === ALL ? educationData : educationData.filter((elem) => elem.type === filter);

    const items = [
      { value: 'Курсы', href: '/' },
      { value: 'Тестирования', href: '/' },
      { value: 'События', href: '/' },
      { value: 'База знаний', href: '/' },
      { value: 'Пользователи', href: '/' },
      { value: 'Отчеты', href: '/' },
    ];

    return (
      <>
        <div className={menuActive ? 'page page__inactive' : 'page'}>
          <header className="header">
            <div className="container">
              <nav className="header__nav">
                <div className="header__nav-title">
                  <h1>
                    <div className="header__logo-text">Knomary</div>
                    <div className="header__logo-heading">test</div>
                  </h1>
                  <div className="header__burger">
                    <nav className="header__burger-nav">
                      <div className="header__burger-btn" onClick={this.toggleMenuActive}>
                        <span />
                      </div>
                    </nav>
                  </div>
                  <Burger active={menuActive} setActive={this.hideBurger} items={items} />
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
            <section>
              <h1 className="main__title">Назначенное обучение</h1>
              <nav className="main__filter">
                <ul className="main__filter-nav">
                  <li
                    onClick={() => this.handleChangeFilter(ALL)}
                    className={
                      filter !== ALL
                        ? 'main__filter-item'
                        : 'main__filter-item main__filter-item--active'
                    }>
                    Все
                    <div className="main__filter-item-counter">{educationData.length}</div>
                  </li>
                  {typeEducation.map((typeEdu) => (
                    <li
                      onClick={() => this.handleChangeFilter(typeEdu)}
                      className={
                        filter !== typeEdu
                          ? 'main__filter-item'
                          : 'main__filter-item main__filter-item--active'
                      }>
                      {labelByType[typeEdu]}
                      <div className="main__filter-item-counter">
                        {educationData.filter((elem) => elem.type === typeEdu).length}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="table__wrapper">
                {filteredData.map((element) => (
                  <CardBase element={element} />
                ))}
              </div>
            </section>
            <section>
              <h1 className="main__title news__title">Новости</h1>
              <div className="table__wrapper news__table-wrapper">
                {newsData.map((element) => (
                  <CardBase element={element} />
                ))}
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
        </div>
      </>
    );
  }
}

export default App;
