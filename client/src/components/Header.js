import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-text">
          Інформаційний портал <br />
          Навчально-наукового інституту інформаційних технологій та робототехніки
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про сайт</Link></li>
          <li><Link to="/gallery">Галерея</Link></li>
          <li><Link to="/news">Новини</Link></li>
          <li><Link to="/contacts">Контакти</Link></li>
          <li><Link to="/register">Реєстрація/Вхід</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
