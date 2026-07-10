
import Arbitres from "../models/arbitre.model.js";
import Affectation from "../models/affectation.model.js";
import Match from "../models/match.model.js";

class CreatArbitesController {

    ArbiteGetAll = async (req, res) => {
        try {
            const arbitres = await Arbitres.findAll();
            if (arbitres.length === 0) {
                return res.status(404).json({ success: false, message: "No arbitres found" });
            }
            return res.status(200).json({ success: true, data: arbitres });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };

    getArbitreById = async (req, res) => {
        try {
            const arbitre = await Arbitres.findByPk(req.params.id);
            if (!arbitre) {
                return res.status(404).json({ success: false, message: "Arbitre not found" });
            }
            return res.status(200).json({ success: true, data: arbitre });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };

    createArbitre = async (req, res) => {
        try {
            const arbitre = await Arbitres.create(req.body);
            return res.status(201).json({ success: true, data: arbitre });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };

    updateArbitre = async (req, res) => {
        try {
            const arbitre = await Arbitres.findByPk(req.params.id);
            if (!arbitre) {
                return res.status(404).json({ success: false, message: "Arbitre not found" });
            }
            await arbitre.update(req.body);
            return res.status(200).json({ success: true, data: arbitre });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };

    deleteArbitre = async (req, res) => {
        try {
            const arbitre = await Arbitres.findByPk(req.params.id);
            if (!arbitre) {
                return res.status(404).json({ success: false, message: "Arbitre not found" });
            }
            await arbitre.destroy();
            return res.status(200).json({ success: true, message: "Arbitre deleted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };

    // GET /arbitres/:id/matchs
    getMatchsByArbitre = async (req, res) => {
        try {
            const arbitre = await Arbitres.findByPk(req.params.id);
            if (!arbitre) {
                return res.status(404).json({ success: false, message: "Arbitre not found" });
            }

            const affectations = await Affectation.findAll({
                where: { arbitreId: req.params.id },
                include: [{ model: Match, as: "Match" }],
            });

            const matchs = affectations.map((a) => ({
                affectationId: a.id,
                fonction: a.fonction,
                match: a.Match,
            }));

            return res.status(200).json({ success: true, arbitre: arbitre.nom, data: matchs });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };

    // GET /arbitres/me/matchs

    getMyMatchs = async (req, res) => {
        try {
            // req.user.id
            const affectations = await Affectation.findAll({
                where: { arbitreId: req.user.id },
                include: [{ model: Match, as: "Match" }],
            });

            const matchs = affectations.map((a) => ({
                affectationId: a.id,
                fonction: a.fonction,
                match: a.Match,
            }));

            return res.status(200).json({ success: true, data: matchs });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    };
}

export default new CreatArbitesController();

