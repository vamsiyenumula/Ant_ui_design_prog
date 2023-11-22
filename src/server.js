const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api', async (req, res) => {
  try {
    const wikipediaResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const tajMahalData = wikipediaResponse.data[0];
    res.send(tajMahalData);
  } catch (error) {
    console.error('Error fetching Taj Mahal data:', error);
    res.status(500).send('Failed to fetch Taj Mahal data');
  }
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
