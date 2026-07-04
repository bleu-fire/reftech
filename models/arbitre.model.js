import { DataTypes } from "sequelize"
import database from "../config/database.js";


const Arbitres = database.define(
    "Arbitre",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        prenom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nationalite:{
            type:DataTypes.STRING,
            allowNull:false
        },
        confederation:{
            type: DataTypes.ENUM(
                "CAF",        // Africa
                "UEFA",       // Europe
                "AFC",        // Asia
                "CONCACAF",   // North America, Central America & Caribbean
                "CONMEBOL",   // South America
                "OFC"         // Oceania
            ),
            allowNull:false
        },
        categorie:{
            type:DataTypes.ENUM(
                "Central",
                "Assistant",
                "VAR"
            ),
            allowNull:false
        },
        experience:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status:{
            type: DataTypes.ENUM(
                "active",
                "suspended",
                "injured",
                "retired"
            ),
            allowNull: false,
            defaultValue: "active"
        }
    }
)
export default Arbitres;