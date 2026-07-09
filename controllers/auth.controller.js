import Users from "../models/Users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class AuthController {


    async register(req, res) {
        const { Nom, email, password, role } = req.body;

        if (!Nom || !email || !password || !role) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        try {

            const existing = await Users.findOne({ where: { email } });
            if (existing) {
                return res.status(409).json({ success: false, message: "Email already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await Users.create({
                name: Nom,
                email,
                password: hashedPassword,
                role,
            });

            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: { id: newUser.id, email: newUser.email, role: newUser.role },
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }


    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        try {
            const user = await Users.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ success: false, message: "Invalid email or password" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ success: false, message: "Invalid email or password" });
            }


            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES }
            );

            return res.status(200).json({
                success: true,
                message: "Login successful",
                token,
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

    async me(req, res) {

        try {
            const user = await Users.findOne({
                where: { id: req.user.id },
                attributes: ["id", "name", "email", "role"],
            });

            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            return res.status(200).json({ success: true, user });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
}

export default new AuthController();