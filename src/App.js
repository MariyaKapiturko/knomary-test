import React from 'react';
import { PureComponent } from 'react';
import CardBase from './components/CardBase';
import Header from './components/header/Header';
import educationData from './fake-data/education.json';
import newsData from './fake-data/news.json';
import { labelByType } from './constants/index';

const ALL = 'all';
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { filter: ALL };
  }

  handleChangeFilter = (type) => {
    this.setState({ filter: type });
  };
  render() {
    const { filter } = this.state;
    const typeEducation = Array.from(new Set(educationData.map((element) => element.type)));
    const filteredData =
      filter === ALL ? educationData : educationData.filter((elem) => elem.type === filter);
    return (
      <>
        <Header />
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
      </>
    );
  }
}

export default App;
