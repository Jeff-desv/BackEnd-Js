const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");


app.use(express.json());

const produto = require("./router/produto.route");

app.use("/api/v3", produto);

app.use(errorMiddleware);

module.exports = app;