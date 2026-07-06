import Arbitres from "./arbitre.model.js";
import Matches from "./match.model.js";
import Affectations from "./affectation.model.js";
import Users from "./Users.model.js";

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

Users.hasMany(Users,{
    foreignKey:"UsersId"
})

export {
    Arbitres,
    Affectations,
    Matches,
    User
}

