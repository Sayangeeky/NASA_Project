const express = require('express');

const { getAllLaunches, httpAddNewLaunches, httpAbortLaunch } = require('./launches.controller');


const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', httpAddNewLaunches)
launchesRouter.delete('/:id', httpAbortLaunch)

module.exports = launchesRouter;
