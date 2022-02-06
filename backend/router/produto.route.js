const express = require("express");
const { getAllProdutos, createProduto, updateProduto, deleteProduto } = require("../controllers/produtos.controllers");

const router = express.Router();

router.route("/produtos").get(getAllProdutos);

router.route("/produto/new").post(createProduto);

router.route("/produto/:id").put(updateProduto).delete(deleteProduto);

module.exports = router