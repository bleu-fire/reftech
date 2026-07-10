import Affectation from "../models/affectation.model.js";

class CreatAffectationController {

    // Create Affectation
    createAffectation = async (req, res) => {
        try {
            const { matchId, arbitreId, role } = req.body;

            const affectation = await Affectation.create({matchId,arbitreId,role});

            return res.status(201).json({essage: "Affectation created successfully.",data: affectation});

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    };


    getAllAffectations = async (req, res) => {
        try {

            const affectations = await Affectation.findAll();

            return res.status(200).json({count: affectations.length,data: affectations});

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    };


    // Get Affectation By ID
    getAffectationById = async (req, res) => {
        try {

            const { id } = req.params;

            const affectation = await Affectation.findByPk(id);

            if (!affectation) {
                return res.status(404).json({ message: "Affectation not found." });
            }

            return res.status(200).json(affectation);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };


    // Update Affectation
    updateAffectation = async (req, res) => {
        try {
            const { id } = req.params;

            const affectation = await Affectation.findByPk(id);

            if (!affectation) {
                return res.status(404).json({ message: "Affectation not found." });
            }

            await affectation.update(req.body);

            return res.status(200).json({
                message: "Affectation updated successfully.",
                data: affectation,
            });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };


    // Delete Affectation
    deleteAffectation = async (req, res) => {
        try {
            const { id } = req.params;

            const affectation = await Affectation.findByPk(id);

            if (!affectation) {
                return res.status(404).json({ message: "Affectation not found." });
            }

            await affectation.destroy();

            return res.status(200).json({ message: "Affectation deleted successfully." });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

}

export default new CreatAffectationController();