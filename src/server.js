const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 8080

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, () => console.log(`Listening on port ${port}`));