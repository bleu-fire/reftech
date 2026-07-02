import { DataTypes } from "sequelize"
import database from "../config/database.js";


console.log(database);

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
        }
    }
)


export default Arbitres;