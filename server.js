import express from 'express'
import database from './config/database.js'
import "./models/index.js";
import router from './routes/arbitre.routes.js';

const app = express();
app.use(express.json());
app.use('/arbitres',router);

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



function main (){
    app.post('/',(req,res)=>{

    })
}





app.listen(3000,()=>{
    console.log("the server run in the port 3000 ")
})