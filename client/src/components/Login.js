import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      if (response.data.success) {
        alert('Вхід виконано');
      } else {
        alert('Невірний email або пароль');
      }
      setFormData({ email: '', password: '' });
    } catch (error) {
      alert('Помилка при вході');
    }
  };

  return (
    <div className="login-container">
      <h2>Вхід</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Увійти</button>
      </form>
      <div className="login-link">
        Немає акаунту? <a href="/register">Зареєструватися</a>
      </div>
    </div>
  );
};

export default Login;
