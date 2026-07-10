import database from "../config/database.js";
import { DataTypes } from "sequelize";

const Users = database.define(
    "Users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type:DataTypes.ENUM('admin','commissaire','arbitre','consultation'),
            allowNull:true
        }
    }
)

export default Users