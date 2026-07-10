import Match from "../models/match.model.js";
import Affectation from "../models/affectation.model.js";
import Arbitres from "../models/arbitre.model.js";

class MatchController {

    createMatch = async (req, res) => {
        try {
            const match = await Match.create(req.body);
            return res.status(201).json({ success: true, message: "Match created successfully", data: match });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    getAllMatches = async (req, res) => {
        try {
            const matches = await Match.findAll();
            if (matches.length === 0) {
                return res.status(404).json({ success: false, message: "No matches found" });
            }
            return res.status(200).json({ success: true, data: matches });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    getMatchById = async (req, res) => {
        try {
            const match = await Match.findByPk(req.params.id);
            if (!match) {
                return res.status(404).json({ success: false, message: "Match not found" });
            }
            return res.status(200).json({ success: true, data: match });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    updateMatch = async (req, res) => {
        try {
            const match = await Match.findByPk(req.params.id);
            if (!match) {
                return res.status(404).json({ success: false, message: "Match not found" });
            }
            await match.update(req.body);
            return res.status(200).json({ success: true, message: "Match updated successfully", data: match });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    deleteMatch = async (req, res) => {
        try {
            const match = await Match.findByPk(req.params.id);
            if (!match) {
                return res.status(404).json({ success: false, message: "Match not found" });
            }
            await match.destroy();
            return res.status(200).json({ success: true, message: "Match deleted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    // GET /matches/:id/arbitres
    getArbitresByMatch = async (req, res) => {
        try {
            const match = await Match.findByPk(req.params.id);
            if (!match) {
                return res.status(404).json({ success: false, message: "Match not found" });
            }

            const affectations = await Affectation.findAll({
                where: { matchId: req.params.id },
                include: [{ model: Arbitres, as: "Arbitre" }],
            });

            const arbitres = affectations.map((a) => ({
                affectationId: a.id,
                fonction: a.fonction,
                arbitre: a.Arbitre,
            }));

            return res.status(200).json({ success: true, match: `${match.equipeDomicile} vs ${match.equipeExterieur}`, data: arbitres });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };
}

export default new MatchController();