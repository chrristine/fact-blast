const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fact-blast-dev', 'pg_database_owner', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

