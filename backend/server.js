const app = require("./app");
const express = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

dotenv.config({path:"backend/config/config.env"});

connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor na porta http://localhost:${process.env.PORT}`)
});

module.exports = app;