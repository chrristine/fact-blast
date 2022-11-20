const express = require('express');
const router = express.Router();

const app = express();

const port = process.env.PORT || 3001; 

const FUN_FACT_API_SECRET = process.env.FUN_FACT_API_SECRET;


// const { client } = require('./services/twilio');
const { db } = require('./db.js');


app.use('/api/random', require('./services/facts'));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  // console.log({client});
});

app.get('/fact_me', (req, res) => {
  console.log({ db })
  res.send(db.User.create({ firstName: "Joe", phone: '4158186641' }));
  console.log({ db })
  
  const users = db.User.findAll();
  console.log("All users:", JSON.stringify(users, null, 2));
});

module.exports = router;
