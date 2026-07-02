import database from "../config/database.js";
import { DataTypes } from "sequelize";


const Affectations = database.define(
    "Affections",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        arbitreId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        matchId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        role:{
            type:DataTypes.ENUM('central', 'assistant', 'VAR', 'AVAR', '4th')
        }
    }
)

export default Affectations