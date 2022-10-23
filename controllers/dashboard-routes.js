const router = require('express').Router();
const sequelize = require('../config/connection');
const { Article, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all articles for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Article.findAll({
    where: {
      user_id: req.session.user_id
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
      const articles = dbArticleData.map(article => article.get({ plain: true }));
      res.render('dashboard', { articles, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Article.findByPk(req.params.id, {
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
      if (dbArticleData) {
        const article = dbArticleData.get({ plain: true });
        
        res.render('edit-article', {
          article,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
