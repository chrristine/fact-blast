const express = require('express');
const router = express.Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/rand', async (req, res) => {
  try {
    const apiResponse = await fetch(
      'https://api.fungenerators.com/fact/categories',
      {
        headers: {
          'X-Fungenerators-Api-Secret': 'wWAEglq4UAv27eXMtGKghAeF',
        },
      }
    );
    const apiResponseJson = await apiResponse.json();
    const {contents: {categories}} = apiResponseJson;
    console.log({categories});

    res.send(apiResponseJson);

  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
});

module.exports = router;