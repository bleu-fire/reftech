import express from "express";
import CreateArbitreController from "../controllers/arbitre.controller.js";
import { createArbitreValidation } from "../middlewares/validate.middleware.js";
const routerArbitre = express.Router();

routerArbitre.get("/",createArbitreValidation, CreateArbitreController.ArbiteGetAll);
routerArbitre.get("/:id", createArbitreValidation,CreateArbitreController.getArbitreById);
routerArbitre.post("/", createArbitreValidation,CreateArbitreController.createArbitre);
routerArbitre.put("/:id",createArbitreValidation ,CreateArbitreController.updateArbitre);
routerArbitre.delete("/:id",createArbitreValidation,CreateArbitreController.deleteArbitre);

export default routerArbitre;