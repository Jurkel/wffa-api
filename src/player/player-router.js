const express = require('express');
const playerRouter = express.Router();
const PlayerService = require('./player-service');

playerRouter
.route('/')
.get((req, res, next) => {
    PlayerService.getAllPlayers(req.app.get('db'))
    .then((players) => {
        res.json(players);
    })
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
.put((req, res, next) => {
    PlayerService.updatePlayerById(req.app.get('db'), req.params.playerId, req.body)
    .then((updatePlayer) => {
        if(!updatePlayer) {
            return res.status(404).json({
                error: {message: 'Player cannot be updated'}
            })
        }
        return res.status(200).send('Player: ' + req.params.playerId + ' successfully updated');
    })
})

playerRouter
.route('/first/:firstName')
.get((req, res, next) => {
    PlayerService.getPlayerByFirstName(req.app.get('db'), req.params.firstName)
    .then((player) => {
        if(!player) {
            return res.status(404).json({
                error: {message: 'Player does not exist'}
            })
        } else {
            res.json(player);
        }
    })
})

playerRouter
.route('/last/:lastName')
.get((req, res, next) => {
    PlayerService.getPlayerByLastName(req.app.get('db'), req.params.lastName)
    .then((player) => {
        if(!player) {
            return res.status(404).json({
                error: {message: 'Player does not exist'}
            })
        } else {
            res.json(player);
        }
    })
})

playerRouter
.route('/idsFirst/:idsFirstName')
.get((req, res, next) => {
    PlayerService.getPlayerIdsByFirstName(req.app.get('db'), req.params.idsFirstName)
    .then((ids) => {
        if(!ids) {
            return res.status(404).json({
                error: {message: 'Player Ids does not exist'}
            })
        } else {
            res.json(ids);
        }
    })
})

playerRouter
.route('/idsLast/:idsLastName')
.get((req, res, next) => {
    PlayerService.getPlayerIdsByLastName(req.app.get('db'), req.params.idsLastName)
    .then((ids) => {
        if(!ids) {
            return res.status(404).json({
                error: {message: 'Player Ids does not exist'}
            })
        } else {
            res.json(ids);
        }
    })
})

playerRouter
.route('/idsFull/:idsFullName')
.get((req, res, next) => {
    PlayerService.getPlayerIdsByFullName(req.app.get('db'), req.params.idsFullName)
    .then((ids) => {
        if(!ids) {
            return res.status(404).json({
                error: {message: 'Player Ids does not exist'}
            })
        } else {
            res.json(ids);
        }
    })
})

playerRouter
.route('/idName/:idName')
.get((req, res, next) => {
    PlayerService.getPlayerNamesById(req.app.get('db'), req.params.idName)
    .then((names) => {
        if(!names) {
            return res.status(404).json({
                error: {message: 'Player name does not exist with the id'}
            })
        } else {
            res.json(names);
        }
    })
})

playerRouter
.route('/statName/:statName')
.get((req, res, next) => {
    PlayerService.getPlayerStatByFullName(req.app.get('db'), req.params.statName)
    .then((stat) => {
        if(!stat) {
            return res.status(404).json({
                error: {message: 'Player Stats does not exist'}
            })
        } else {
            res.json(stat);
        }
    })
})

playerRouter
.route('/statId/:statId')
.get((req, res, next) => {
    PlayerService.getPlayerStatById(req.app.get('db'), req.params.statId)
    .then((stat) => {
        if(!stat) {
            return res.status(404).json({
                error: {message: 'Player Stats does not exist'}
            })
        } else {
            res.json(stat);
        }
    })
})

playerRouter
.route('/injuryStatName/:injuryStatNames')
.get((req, res, next) => {
    PlayerService.getPlayerInjuryStatByFullName(req.app.get('db'), req.params.injuryStatNames)
    .then((stat) => {
        if(!stat) {
            return res.status(404).json({
                error: {message: 'Player Stats does not exist'}
            })
        } else {
            res.json(stat);
        }
    })
})

playerRouter
.route('/injuryStatId/:injuryStatId')
.get((req, res, next) => {
    PlayerService.getPlayerInjuryStatById(req.app.get('db'), req.params.injuryStatId)
    .then((stat) => {
        if(!stat) {
            return res.status(404).json({
                error: {message: 'Player Stats does not exist'}
            })
        } else {
            res.json(stat);
        }
    })
})

playerRouter
.route('/infoName/:playerNames')
.get((req, res, next) => {
    PlayerService.getPlayerInfoByFullName(req.app.get('db'), req.params.playerNames)
    .then((info) => {
        if(!info) {
            return res.status(404).json({
                error: {message: 'Player Info does not exist'}
            })
        } else {
            res.json(info);
        }
    })
})

playerRouter
.route('/infoId/:playerId')
.get((req, res, next) => {
    PlayerService.getPlayerInfoById(req.app.get('db'), req.params.playerId)
    .then((info) => {
        if(!info) {
            return res.status(404).json({
                error: {message: 'Player Info does not exist'}
            })
        } else {
            res.json(info);
        }
    })
})

module.exports = playerRouter;

