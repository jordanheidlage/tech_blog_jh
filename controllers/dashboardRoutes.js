const router = require('express').Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      res.render('dashboard',{
        logged_in: req.session.logged_in
      })
    }
 catch (err) {
    res.status(500).json(err);
  }
})

router.get('/new', withAuth, async (req, res) =>{
    try {
        res.render('newTopic',{
            logged_in: req.session.logged_in
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;