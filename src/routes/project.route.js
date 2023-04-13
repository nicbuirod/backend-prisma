import express from "express";
import { createProject } from "../controllers/project.controller.js";

const router = express.Router();

//Create project
router.post("/", createProject);

export default router;
