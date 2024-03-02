const express = require('express')
const app = express()

const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ response: "Get request handled successfully!", code: 200 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});