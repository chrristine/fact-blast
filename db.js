const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('fact-blast-dev', 'postgres', 'jillian', {
  host: 'localhost',
  dialect: 'postgres'
});

const test = async () => {
  try {
    await sequelize.authenticate();
    return console.log('Connection has been established successfully.');
  } catch (error) {
    return console.error('Unable to connect to the database:', error);
  }
}

test();

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  daysOfWeek: {
    type: Sequelize.ARRAY(Sequelize.ENUM({
      values: dayList
    })),
    allowNull: false
  },
}, {
    freezeTableName: true
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

const DayOfWeek = sequelize.define('DayOfWeek', {
  id: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.ENUM({
      values: dayList
    }), 
  },
});

User.hasMany(Topic);
DayOfWeek.hasMany(User);
