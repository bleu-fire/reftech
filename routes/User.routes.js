import express from 'express';
import controller from '../controllers/users.controller.js';

const UserRout = express.Router();

UserRout.post("/", controller.createUsers);
UserRout.get("/", controller.getUsers);
UserRout.get("/:id", controller.getUserById);
UserRout.put("/:id", controller.updateUsers);
UserRout.delete("/:id", controller.deleteUsers);

export default UserRout;
