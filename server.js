const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});

//아무거나
app.get('/api', (req, res) => {
  res.send('connected successfully')
});