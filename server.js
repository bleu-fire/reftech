import express from 'express'
import database from './config/database.js'
import "./models/index.js";
import routerArbitre from './routes/arbitre.routes.js';
import routerAffectation  from './routes/affectation.routes.js';
import routerMatch from './routes/match.routes.js';
import {createArbitreValidation} from './middlewares/validate.middleware.js'


const app = express();
app.use(express.json());
app.use('/arbitres',routerArbitre);
app.use('/affectation',routerAffectation);
app.use('/matches',routerMatch);



async function connectedDB () {
    try {
        await database.authenticate();
        console.log("data connected ");
        await database.sync()
    }

    catch(err){
        console.log("error connection");
        console.error(err);
    }

}

connectedDB()

app.listen(3000,()=>{
    console.log("the server run in the port 3000 ")
})