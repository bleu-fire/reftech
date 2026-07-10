import express from "express";
import controller from "../controllers/users.controller.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";

const UserRout = express.Router();

// All user management is admin-only
UserRout.post("/",    authenticate, authorize("admin"), controller.createUsers);
UserRout.get("/",     authenticate, authorize("admin"), controller.getUsers);
UserRout.get("/:id",  authenticate, authorize("admin"), controller.getUserById);
UserRout.put("/:id",  authenticate, authorize("admin"), controller.updateUsers);
UserRout.delete("/:id", authenticate, authorize("admin"), controller.deleteUsers);

export default UserRout;
