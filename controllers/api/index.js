const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./topicRoutes');

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);

module.exports = router;