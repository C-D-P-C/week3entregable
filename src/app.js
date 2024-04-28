const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./utils/errorHandler");
require("dotenv").config();

// Esta es la aplicación
const app = express();

// Middlewares
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());

app.use(router);
app.get("/", (req, res) => {
  return res.send("Welcome to express!");
});

// middlewares después de las routes
app.use(errorHandler);

module.exports = app;
