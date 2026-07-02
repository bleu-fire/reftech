import { Sequelize } from "sequelize";


const database  = new Sequelize(
    "postgres",
    "user",
    "user",
    {
        host:"localhost",
        port:3003,
        dialect:"postgres"
    }
)



export default database;
