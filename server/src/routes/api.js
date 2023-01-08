const express = require("express");

const planetRourter = require("./planets/planets.router");
const launchesRourter = require("./launches/launches.router");

const api = express.Router();

api.use("/planets", planetRourter);
api.use("/launches", launchesRourter);

module.exports = api;
