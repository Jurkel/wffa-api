const express = require('express');
const managerRouter = express.Router();
const ManagerService = require('./manager-service');

managerRouter
.route('/')
.get((req, res, next) => {
    ManagerService.getAllManagers(req.app.get('db'))
    .then((managers) => {
        if(!managers) {
            return res.status(404).json( {
                error: {message: 'Managers does not exist'}
            })
        }
        res.managers = managers;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.managers);
})

managerRouter
.route('/id/:managerId')
.get((req, res, next) => {
    ManagerService.getManagerById(req.app.get('db'), req.params.managerId)
    .then((managerId) => {
        if(!managerId) {
            return res.status(404).json( {
                error: {message: 'Manager Id does not exist'}
            })
        }
        res.managerId = managerId;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.managerId);
})

managerRouter
.route('/first/:firstName')
.get((req, res, next) => {
    ManagerService.getManagerByFirstName(req.app.get('db'), req.params.firstName)
    .then((firstName) => {
        console.log('first name: ' + firstName);
        if(!firstName) {
            return res.status(404).json( {
                error: {message: 'First Name does not exist'}
            })
        }
        res.firstName = firstName;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.firstName);
})

managerRouter
.route('/last/:lastName')
.get((req, res, next) => {
    ManagerService.getManagerByLastName(req.app.get('db'), req.params.lastName)
    .then((lastName) => {
        if(!lastName) {
            return res.status(404).json( {
                error: {message: 'Last name does not exist'}
            })
        }
        res.lastName = lastName;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.lastName);
})

managerRouter
.route('/display/:displayName')
.get((req, res, next) => {
    ManagerService.getManagerByDisplayName(req.app.get('db'), req.params.displayName)
    .then((displayName) => {
        if(!displayName) {
            return res.status(404).json( {
                error: {message: 'Display name does not exist'}
            })
        }
        res.displayName = displayName;
        next();
    })
    .catch(next);
})
.get((req, res, next) => {
    res.json(res.displayName);
})

module.exports = managerRouter;