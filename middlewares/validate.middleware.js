const createArbitreValidation = (req, res, next) => {
    const {
        nom,
        prenom,
        nationalite,
        confederation,
        categorie,
        experience,
        statut
    } = req.body;

    if (
        !nom ||
        !prenom ||
        !nationalite ||
        !confederation ||
        !categorie ||
        experience === undefined ||
        !statut
    ) {
        return res.status(400).json({success: false,message: "All fields are required."});
    }

    next();
};

const validateAffectation = (req, res, next) => {
    const {
        matchId,
        arbitreId,
        role
    } = req.body;

    if (!matchId || !arbitreId || !role) {
        return res.status(400).json({success: false,message: "All fields are required."});
    }

    next();
};

const validateMatch = (req, res, next) => {
    const {
        date,
        stade,
        equipe_domicile,
        equipe_exterieur,
        competition,
        phase
    } = req.body;

    if (
        !date ||
        !stade ||
        !equipe_domicile ||
        !equipe_exterieur ||
        !competition ||
        !phase
    ) {
        return res.status(400).json({success: false,message: "All fields are required."});
    }

    next();
};

export {
    createArbitreValidation,
    validateAffectation,
    validateMatch
};