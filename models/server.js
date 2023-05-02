const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middleware
    this.middlewares();

    this.app.get("/data", (req, res) => {
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-71.256459, -29.904052],
            },
            properties: {
              title: "Mapbox",
              description: "Trabajador 1",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-71.255808, -29.9042],
            },
            properties: {
              title: "Mapbox",
              description: "Trabajador 2",
            },
          },
        ],
      };
      res.json({
        geojson,
      });
    });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port " + this.port);
    });
  }
}

module.exports = { Server };
