import database from "../config/database.js";

import { DataTypes } from "sequelize";




const Matches = database.define(
        "match",{
            id:{
              type:DataTypes.INTEGER,
              primaryKey:true,
              autoIncrement:true
              

            },
            equipeDomicile:{
                type:DataTypes.STRING,
                allowNull:false
            },
            equipeExterieur:{
                type:DataTypes.STRING,
                allowNull:false
            },
            stade:{
                type:DataTypes.STRING,
                allowNull:true
            },
            villeHote:{
                type:DataTypes.STRING,
                allowNull:true
            },
            dateMatch:{
                type:DataTypes.DATE,
                allowNull:true
            },
            phase:{
                    type: DataTypes.ENUM(
                    "Group Stage",
                    "Round of 16",
                    "Quarter Final",
                    "Semi Final",
                    "Final"
                                            ),
                allowNull:true
            }

        }
    )

export default  Matches;