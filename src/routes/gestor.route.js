import express from "express";
import {
  getAllGestor,
  getOneGestor,
  createGestor,
  updateGestor,
  deleteOneGestor,
} from "../controllers/gestor.controller.js";

const router = express.Router();

//routes

//Select all gestores
router.get("/", getAllGestor);

//Select one gestores
router.get("/:id", getOneGestor);

//Create gestor
router.post("/", createGestor);

//update a gestor
router.put("/:id", updateGestor);

//delete

router.delete("/:id", deleteOneGestor);
export default router;
