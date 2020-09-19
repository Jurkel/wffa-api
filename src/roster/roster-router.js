const express = require('express');
const rosterRouter = express.Router();
const RosterService = require('./roster-service');

rosterRouter
.route('/')
.get((req, res, next) => {
    RosterService.getAllRoster(req.app.get('db'))
    .then((rosters) => {
        res.send(rosters);
        res.json();
    })
})

rosterRouter
.route('/id/:id')
.get((req, res, next) => {
    RosterService.getAllRoster(req.app.get('db'), req.params.id)
    .then((rosterId) => {
        if(!rosterId) {
            return res.status(404).json({
                error: {message: 'Roster Id does not exist'}
            })
        }
        res.rosterId = rosterId;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.rosterId);
})
.put((req, res, next) => {
    RosterService.updateRosterById(req.app.get('db'), req.params.rosterId, req.body)
    .then((updateRoster) => {
        if(!updateRoster) {
            return res.status(404).json({
                error: {message: 'Roster cannot be updated'}
            })
        }
        return res.status(200).send('Roster: ' + req.params.rosterId + ' successfully updated');
    })
})

rosterRouter
.route('/league-id/:leagueId')
.get((req, res, next) => {
    RosterService.getRosterByLeagueId(req.app.get('db'), req.params.leagueId)
    .then((league) => {
        if(!league) {
            return res.status(404).json({
                error: {message: 'League does not exist'}
            })
        } else {
            res.send(league);
            res.json();
        }
    })
})

module.exports = rosterRouter;