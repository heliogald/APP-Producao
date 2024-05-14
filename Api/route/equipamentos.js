import express from "express";

import { getEquipamentos, getEquipamentosId, addEquipamentos, updateEquipamentos, deleteEquipamentos } from "../controllers/equipamento.js"; 

const router = express.Router();

router.get("/equipamento", getEquipamentos);

router.get("/equipamento/:id", getEquipamentosId);

router.post("/equipamento", addEquipamentos);

router.put("/equipamento/:id", updateEquipamentos);

router.delete("/equipamento/:id", deleteEquipamentos);


export default router;
