const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require("./launches.controller");

const launchesRourter = express.Router();

launchesRourter.get("/", httpGetAllLaunches);
launchesRourter.post("/", httpAddNewLaunch);
launchesRourter.delete("/:id", httpAbortLaunch);

module.exports = launchesRourter;
