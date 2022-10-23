const router = require('express').Router();
const sequelize = require('../config/connection');
const { Article, User, Comment, } = require('../models');

// get all articles for homepage
router.get('/', (req, res) => {
  Article.findAll({
    attributes: [
      'id',
      'title',
      'article_content',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'article_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbArticleData => {
      const articles = dbArticleData.map(article => article.get({ plain: true }));

      res.render('homepage', {
        articles,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single article
router.get('/article/:id', (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'article_content',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'article_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbArticleData => {
      if (!dbArticleData) {
        res.status(404).json({ message: 'No article found with this id' });
        return;
      }

      const post = dbArticleData.get({ plain: true });

      res.render('single-article', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
