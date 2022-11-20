const { User } = require('./User.js');
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
const sequelize = new Sequelize('fact-blast-dev', 'postgres', 'jillian', {
  host: 'localhost',
  dialect: 'postgres'
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

DayOfWeek.hasMany(User);