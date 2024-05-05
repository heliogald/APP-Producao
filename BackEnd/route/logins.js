import express from "express";
import {getLogin, addUsuario, editUsuario, deleteUsuario, listUsuarios, getUsuarioById } from "../controllers/login.js"; 

const router = express.Router();

// Usar POST para adicionar registros (sign up)
router.post("/usuario", addUsuario);

router.put("/usuario/:id", editUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.get("/usuario", listUsuarios);

router.get("/usuario/:id", getUsuarioById);

// Usar POST para login (sign in)
router.post("/signin", getLogin);

export default router;
