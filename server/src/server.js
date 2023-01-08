require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");
const { mongoConnect } = require("./services/mongo");

const { loadPlanetsData } = require("./models/planets.model");

const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
