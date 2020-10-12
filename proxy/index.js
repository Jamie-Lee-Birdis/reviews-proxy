const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 3000;

const app = express();
app.locals.getGameId = (referer) => {
  if (referer[referer.length - 1] === '/') {
    referer = referer.slice(0, -1)
  }
  var refererPieces = referer.split('/');
  return refererPieces[refererPieces.length - 1]
};

app.use(bodyParser.json())

app.use(express.static('public'));
app.use('/game/:id/', (req, res, next) => {
  debugger;
  var id = req.params.id;
  next();
}, express.static('public'));

  // //////////////Hero Section////////////////// //
  app.use('/api/hero/all_info/', (req, res) => {
    let host = req.headers.host;
    let ip = host.split(':')[0];
    var gameId = app.locals.getGameId(req.headers.referer);
    axios.get(`http://${ip}:3001/api/hero/all_info/${gameId}`)
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
    debugger;
    var gameId = app.locals.getGameId(req.headers.referer);
    axios.get(`http://127.0.0.1:3002/moist-air/game`)
    .then(function (response) {
      res.send([ response.data[gameId - 1] ]);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  })

  // //////////////Review Section////////////////// //
  app.get('/moist-air/reviews', (req, res) => {
    let host = req.headers.host;
    let ip = host.split(':')[0];
    // debugger;
    // let reviewsComponent = "reviews";
    // console.log('---------------------------------')
    // console.log('req.headers\n', req.headers)
    // console.log('---------------------------------')
    if (req.headers.referer) {
      var gameId = app.locals.getGameId(req.headers.referer);
      axios.get(`http://${ip}:3003/moist-air/reviews?gameID=${gameId}`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        // Control the error sent back.
        res.send(error);
      });
    }
  })

  app.patch('/moist-air/reviews', (req, res) => {
    debugger;
    let reviewID = req.query.reviewID;
    let key = req.query.key;
    let value = req.query.value;
    let query = `reviewID=${reviewID}&key=${key}&value=${value}`
    axios.patch(`http://127.0.0.1:3003/moist-air/reviews?${query}`)
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