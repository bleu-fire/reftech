import Arbitres from "./arbitre.model.js";
import Matches from "./match.model.js";
import Affectations from "./affectation.model.js";


Arbitres.hasMany(Affectations, {
    foreignKey: "arbitreId",
});

Affectations.belongsTo(Arbitres, {
    foreignKey: "arbitreId",
});

Matches.hasMany(Affectations, {
    foreignKey: "matchId",
});

Affectations.belongsTo(Matches, {
    foreignKey: "matchId",
});


export {
    Arbitres,
    Affectations,
    Matches
}

