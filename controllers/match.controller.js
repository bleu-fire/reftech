import Match from "../models/match.model.js";

class MatchController {
    createMatch = async (req, res) => {
        try {

            const match = await Match.create(req.body);

            return res.status(201).json({message: "Match created successfully",data: match});

        } catch (err) {

            console.error(err);

            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };

    getAllMatches = async (req, res) => {
        try {

            const matches = await Match.findAll();

            if (matches.length === 0) {
                return res.status(404).json({message: "No matches found"});
            }

            return res.status(200).json({message: "Success",data: matches});

        } catch (err) {

            console.error(err);

            return res.status(500).json({message: "Internal Server Error"});
        }
    };

    getMatchById = async (req, res) => {
        try {

            const match = await Match.findByPk(req.params.id);

            if (!match) {
                return res.status(404).json({message: "Match not found"});
            }

            return res.status(200).json({message: "Success",data: match});

        } catch (err) {

            console.error(err);

            return res.status(500).json({message: "Internal Server Error"});
        }
    };


    updateMatch = async (req, res) => {
        try {

            const match = await Match.findByPk(req.params.id);

            if (!match) {
                return res.status(404).json({message: "Match not found"});
            }

            await match.update(req.body);

            return res.status(200).json({message: "Match updated successfully",data: match});

        } catch (err) {

            console.error(err);

            return res.status(500).json({message: "Internal Server Error"});
        }
    };


    deleteMatch = async (req, res) => {
        try {

            const match = await Match.findByPk(req.params.id);

            if (!match) {
                return res.status(404).json({message: "Match not found"});
            }

            await match.destroy();

            return res.status(200).json({message: "Match deleted successfully"});

        } catch (err) {

            console.error(err);

            return res.status(500).json({message: "Internal Server Error"});
        }
    };

}

export default new MatchController();