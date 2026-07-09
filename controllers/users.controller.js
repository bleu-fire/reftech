import Users from '../models/Users.model.js';

class UserController {

    // POST /users
    createUsers = async (req, res) => {
        const { Nom, email, password, role } = req.body;
        try {
            const newUser = await Users.create({ name: Nom, email, password, role });
            return res.status(201).json({ success: true, message: "User created successfully", data: newUser });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

    // GET /users
    getUsers = async (req, res) => {
        try {
            const users = await Users.findAll();
            if (!users.length) {
                return res.status(404).json({ success: false, message: "No users found" });
            }
            return res.status(200).json({ success: true, data: users });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

    // GET /users/:id
    getUserById = async (req, res) => {
        try {
            const user = await Users.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            return res.status(200).json({ success: true, data: user });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

    // PUT /users/:id
    updateUsers = async (req, res) => {
        const { id } = req.params;
        try {
            const [updatedRows] = await Users.update(req.body, { where: { id } });
            if (updatedRows === 0) {
                return res.status(404).json({ success: false, message: "User not found or no changes made" });
            }
            return res.status(200).json({ success: true, message: "User updated successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

    // DELETE /users/:id
    deleteUsers = async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Users.destroy({ where: { id } });
            if (deleted === 0) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            return res.status(200).json({ success: true, message: "User deleted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
}

export default new UserController();