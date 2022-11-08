const express = require('express');

const app = express();

const port = process.env.PORT || 3001; //Line 3
const { client } = require('./twilio');


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  console.log({client});
});


// const express = require('express');
// require("dotenv").config();

// const app = express();

// const PORT = 3000;

module.exports = app;
