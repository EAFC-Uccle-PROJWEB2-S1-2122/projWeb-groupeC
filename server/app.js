const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const apiRouter = require("./routes/api");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;
