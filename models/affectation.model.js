import database from "../config/database.js";
import { DataTypes } from "sequelize";

const Affectations = database.define("Affectation", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fonction: {
        type: DataTypes.ENUM("central", "assistant", "VAR", "AVAR", "4th"),
        allowNull: false,
    },
    arbitreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Arbitres",
            key: "id",
        },
    },
    matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "matches",
            key: "id",
        },
    },
});

export default Affectations;