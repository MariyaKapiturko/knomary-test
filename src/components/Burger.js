import React from 'react';

const Burger = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? 'header__menu active' : 'header__menu'}
      onClick={() => setActive(false)}>
      <div className="blur">
        <div className="header__menu-content" onClick={(e) => e.stopPropagation()}>
          <ul>
            {items.map((item) => (
              <li className="header__nav-item">
                <a href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Burger;
