const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');


Topic.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Topic.hasMany(Comment, {
  foreignKey: 'topic_id'
})


module.exports = { User, Topic, Comment };
