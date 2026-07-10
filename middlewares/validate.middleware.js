import { z } from "zod";



const matchSchema = z.object({
    equipeDomicile: z.string().min(1, "equipeDomicile is required"),
    equipeExterieur: z.string().min(1, "equipeExterieur is required"),
    stade: z.string().optional(),
    ville: z.string().optional(),
    date: z.string().optional(),
    phase: z.enum(["Group Stage", "Round of 16", "Quarter Final", "Semi Final", "Final"]).optional(),
});

const arbitreSchema = z.object({
    nom: z.string().min(1, "nom is required"),
    prenom: z.string().min(1, "prenom is required"),
    nationalite: z.string().min(1, "nationalite is required"),
    confederation: z.enum(["CAF", "UEFA", "AFC", "CONCACAF", "CONMEBOL", "OFC"]),
    categorie: z.enum(["Central", "Assistant", "VAR"]),
    experience: z.number().int().min(0).default(0),
    statut: z.enum(["active", "suspended", "injured", "retired"]).default("active"),
});

const affectationSchema = z.object({
    matchId: z.number().int().positive("matchId is required"),
    arbitreId: z.number().int().positive("arbitreId is required"),
    fonction: z.enum(["central", "assistant", "VAR", "AVAR", "4th"]),
});

const registerSchema = z.object({
    name: z.string().min(1, "name is required"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["admin", "commissaire", "arbitre", "consultation"]),
});

const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "password is required"),
});



const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map((e) => e.message);
        return res.status(400).json({ success: false, message: errors[0], errors });
    }
    req.body = result.data;
    next();
};


const validateMatch = validate(matchSchema);
const createArbitreValidation = validate(arbitreSchema);
const validateAffectation = validate(affectationSchema);
const validateRegister = validate(registerSchema);
const validateLogin = validate(loginSchema);

export {
    validateMatch,
    createArbitreValidation,
    validateAffectation,
    validateRegister,
    validateLogin,
};
