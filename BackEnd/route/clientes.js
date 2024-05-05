import express from "express";

import {
  getClientes,
  getClientesId,
  addClientes,
  updateClientes,
  deleteClientes,
} from "../controllers/cliente.js";

const router = express.Router();

router.get("/cliente", getClientes);

router.get("/cliente/:id", getClientesId);

router.post("/cliente", addClientes);

router.put("/cliente/:id", updateClientes);

router.delete("/cliente/:id", deleteClientes);

export default router;
