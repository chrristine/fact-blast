const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fact-blast-dev', 'postgres', 'jillian', {
  host: 'localhost',
  dialect: 'postgres'
});
const Topic = sequelize.define('Topic', {
  id: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  freezeTableName: true
});
