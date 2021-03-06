const express = require('express');
const playerRouter = express.Router();
const PlayerService = require('./player-service');

playerRouter
.route('/')
.get((req, res, next) => {
    PlayerService.getAllPlayers(req.app.get('db'))
    .then((players) => {
        if(!players) {
            return res.status(404).json({
                error: {message: 'Players does not exist'}
            })
        }
        res.players = players;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.players);
})

playerRouter
.route('/id/:playerId')
.get((req, res, next) => {
    PlayerService.getPlayerById(req.app.get('db'), req.params.playerId)
    .then((playerId) => {
        if(!playerId) {
            return res.status(404).json({
                error: {message: 'Player Id does not exist'}
            })
        }
        res.playerId = playerId;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.playerId);
})

playerRouter
.route('/ids/:playerIds')
.get((req, res, next) => {
    PlayerService.getPlayersByIds(req.app.get('db'), req.params.playerIds)
    .then((players) => {
        if(!players) {
            return res.status(404).json({
                error: {message: 'Players does not exist'}
            })
        } else {
            res.players = players;
            next();
        }
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.players['rows']);
})

module.exports = playerRouter;

