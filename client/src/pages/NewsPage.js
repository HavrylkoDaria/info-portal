import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        if (Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          console.error('Data received is not an array');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <div className="news-container">
        <h1>Новини</h1>
        {news.length > 0 ? (
          <div className="news-list">
            {news.map((newsItem) => (
              <div key={newsItem.id} className="news-item">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="news-image"
                />
                <div className="news-content">
                  <h2>{newsItem.title}</h2>
                  <p>{newsItem.body}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Інформація про новини відсутня</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
