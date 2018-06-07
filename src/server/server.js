const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

const app = express();
app.use(bodyParser.json());

app.use(express.static('build'));

app.get('/api', (req, res) => {
  res.send({ username: os.userInfo().username });
});

const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${8080}`));