const ErrorHandle = require("../utils/errorhandle");

module.exports = (err, res, req, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Erro no servidor"

    res.status(err.statusCode).json({
        sucess: false,
        error: err
    });
};