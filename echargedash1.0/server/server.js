const express = require('express');
const axios = require('axios');
const { getData } = require('./database');

const app = express();
const port = 3001;

console.log("testing");
app.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});