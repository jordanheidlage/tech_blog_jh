const router = require('express').Router();
const { Topic } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const topicData = await Topic.findAll({
        where: {
          user_id: req.session.user_id
        }
      })
      const topics = topicData.map((topic) => topic.get({ plain: true }));

      res.render('dashboard',{
        topics,
        logged_in: req.session.logged_in
      })
    }
 catch (err) {
    res.status(500).json(err);
  }
})
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const editTopic = await Topic.findByPk(req.params.id)
    const topic = editTopic.get({ plain: true });

    res.render('editTopic',{
      topic,
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