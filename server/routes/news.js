const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Отримання всіх новин
router.get('/news', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Додавання нової новини
router.post('/news', async (req, res) => {
  const news = new News({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
