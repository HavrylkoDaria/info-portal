import React, { useEffect, useState } from 'react';
import SliderComponent from '../components/SliderComponent';
import './HomePage.css';

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Вітаємо на нашому порталі!</h1>
        <p>Останні новини</p>
      </header>
      <div className="slider-container">
        <SliderComponent items={news} />
      </div>
      <div className="news-section">
        {news.map(item => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
