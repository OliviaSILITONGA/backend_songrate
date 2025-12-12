const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user'); 

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'user_id',
    references: {
      model: User, 
      key: 'id'
    }
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  artist: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'comments',
  underscored: true
});

Comment.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Comment;