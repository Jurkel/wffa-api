require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const playerRouter = require('./player/player-router');
const managerRouter = require('./manager/manager-router');
const fetch = require('fetch');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/player', playerRouter);
app.use('/manager', managerRouter);

app.get('/', (req, res) => {
  fetch('https://lailafitriana.s3.amazonaws.com/players.json')
  .then(res => res.json())
  .then(players => {
    let lengths = players.length;
    players.forEach((player, index) => {
      delete player.height;
      if(index == lengths - 1) {
        res.json(players);
      }
    })
  })
  // res.send('WFFL Home!')
})

app.get('/xss', (req, res) => {
  res.cookie('secretToken', '1234567890');
  res.sendFile(__dirname + '/xss.example.html');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
})

module.exports = app