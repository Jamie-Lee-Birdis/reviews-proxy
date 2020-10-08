const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 3000;

const app = express();
app.use(bodyParser.json())

  app.use('/', express.static('public'));

  app.use('/api/hero/all_info/', (req, res) => {
    var id = req.params.gameID;
    if (!id) {
      id = 2;
    }
    axios.get(`http://127.0.0.1:3001/api/hero/all_info/${id}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  })

  app.use('/moist-air/game', (req, res) => {
    var id = req.params.gameID;
    if (!id) {
      id = 0;
    } else {
      id = id - 1;
    }
    axios.get(`http://127.0.0.1:3002/moist-air/game?id=${id}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  })


  app.get('/moist-air/reviews', (req, res) => {
    var id = req.params.gameID;
    if (!id) {
      id = 1;
    }
    axios.get(`http://127.0.0.1:3003/moist-air/reviews?gameID=${id}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  })

app.listen(port, () => {
  console.log(`Moist Air app listening at http://localhost:${port}`)
})