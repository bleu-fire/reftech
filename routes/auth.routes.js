import express from "express";
import AuthController from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

// Public routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Protected route — needs valid JWT
router.get("/me", authenticate, AuthController.me);

export default router;