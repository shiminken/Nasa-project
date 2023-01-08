const express = require("express");

const { httpGetAllPlanets } = require("./planets.controller");

const planetRourter = express.Router();

planetRourter.get("/", httpGetAllPlanets);

module.exports = planetRourter;
