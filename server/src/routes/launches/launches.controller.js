const { addNewLaunch, launches, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model');

function getAllLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLaunches(req,res){
    const launch = req.body
    if(!launch.mission || !launch.rocket || !launch.target|| !launch.launchDate){
        return res.status(400).json({
            error: 'Invalid launch date'
        })
    }

    launch.launchDate = new Date(launch.launchDate)
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: "Invalid data type"
        })
    }
    addNewLaunch(launch)
    return res.status(201).json(launch)
}
function httpAbortLaunch(req,res){
    const launchId = Number(req.params.id);
    if(!existsLaunchWithId(launchId))
    return res.status(404).json({
        error: 'Launch Not Found'
    })
    const aborted = abortLaunchById(launchId)
    return res.send(200).json(aborted)

}

module.exports = { getAllLaunches, httpAddNewLaunches, httpAbortLaunch };
