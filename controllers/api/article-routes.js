const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Article, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all articles
router.get('/', (req, res) => {
  console.log('======================');
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
    .then(dbArticleData => res.json(dbArticleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get an article by ID including the comments made
router.get('/:id', (req, res) => {
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
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbArticleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, (req, res) => {
  // expects {title: 'Tech Stuff', article_content: 'This article is about tech stuff.', user_id: 1}
  Article.create({
    title: req.body.title,
    article_content: req.body.article_content,
    user_id: req.session.user_id
  })
    .then(dbArticleData => res.json(dbArticleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Article.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbArticleData => {
      if (!dbArticleData) {
        res.status(404).json({ message: 'No article found with this id' });
        return;
      }
      res.json(dbArticleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete an article given an ID
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Article.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbArticleData => {
      if (!dbArticleData) {
        res.status(404).json({ message: 'No article found with this id' });
        return;
      }
      res.json(dbArticleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
