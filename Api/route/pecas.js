import express from "express";

import { getPecas, getPecasId, addPecas, updatePecas, deletePecas } from "../controllers/peca.js"; 

const router = express.Router();

router.get("/peca", getPecas);

router.get("/peca/:id", getPecasId);

router.post("/peca", addPecas);

router.put("/peca/:id", updatePecas);

router.delete("/peca/:id", deletePecas);


export default router;
