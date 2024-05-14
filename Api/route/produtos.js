import express from "express";

import { getProdutos, getProdutosId, addProdutos, updateProdutos, deleteProdutos } from "../controllers/produto.js"; 

const router = express.Router();

router.get("/produto", getProdutos);

router.get("/produto/:id", getProdutosId);

router.post("/produto", addProdutos);

router.put("/produto/:id", updateProdutos);

router.delete("/produto/:id", deleteProdutos);


export default router;
