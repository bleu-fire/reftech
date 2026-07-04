import express from "express";
import MatchController from "../controllers/match.controller.js";
import {validateMatch} from "../middlewares/validate.middleware.js"

const routerMatch = express.Router();

routerMatch.get("/", validateMatch,MatchController.getAllMatches);

routerMatch.get("/:id",validateMatch, MatchController.getMatchById);

routerMatch.post("/", validateMatch,MatchController.createMatch);

routerMatch.put("/:id", validateMatch,MatchController.updateMatch);

routerMatch.delete("/:id", validateMatch,MatchController.deleteMatch);

export default routerMatch;