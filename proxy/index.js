const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 3000;

const app = express();
app.use(bodyParser.json())

  app.use(express.static('public'));
  app.use('/game/:id/', (req, res, next) => {
    var id = req.params.id;
    app.locals.gameID = id;
    next();
  }, express.static('public'));

  // //////////////Hero Section////////////////// //
  app.use('/api/hero/all_info/', (req, res) => {
    axios.get(`http://127.0.0.1:3001/api/hero/all_info/${app.locals.gameID}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  })

  // //////////////Body Section////////////////// //
  app.get('/moist-air/game', (req, res) => {
    axios.get(`http://127.0.0.1:3002/moist-air/game?id=${app.locals.gameID}`)
    .then(function (response) {
      res.send([ response.data[app.locals.gameID - 1] ]);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  })

  // //////////////Review Section////////////////// //
  app.get('/moist-air/reviews', (req, res) => {
    axios.get(`http://127.0.0.1:3003/moist-air/reviews?gameID=${app.locals.gameID}`)
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