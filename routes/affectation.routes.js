import express from "express";
import CreatAffectationController from "../controllers/affectation.controller.js";
import { validateAffectation } from "../middlewares/validate.middleware.js";

const router = express.Router();


router.get("/",validateAffectation, CreatAffectationController.getAllAffectations);
router.get("/:id",validateAffectation, CreatAffectationController.getAffectationById);
router.post("/", validateAffectation,CreatAffectationController.createAffectation);
router.put("/:id",validateAffectation, CreatAffectationController.updateAffectation);
router.delete("/:id",validateAffectation, CreatAffectationController.deleteAffectation);

export default router;