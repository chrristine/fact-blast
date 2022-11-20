const { Sequelize, DataTypes } = require('sequelize');
const { Topic } = require('./Topic.js');
const sequelize = new Sequelize('fact-blast-dev', 'postgres', 'jillian', {
  host: 'localhost',
  dialect: 'postgres'
});
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  daysOfWeek: {
    type: Sequelize.ARRAY(Sequelize.ENUM({
      values: dayList
    }))
  },
}, {
  freezeTableName: true
});

User.hasMany(Topic.Topic);