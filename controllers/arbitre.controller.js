import Arbitres from '../models/arbitre.model.js'
class CreatArbitesController {

    ArbiteGetAll = async (req, res) => {
        try {
            const arbitre = await Arbitres.findAll()
            if (arbitre.length === 0) {
                res.status(404).json({ massege: "not found gutt" });
            }
            res.status(200).json(arbitre);
        } 
            
    catch(err) {
        console.error(err)
    }
    }

    getArbitreById = async (req,res)=>{
       try{
         const arbitre = await Arbitres.findByPk(id)
         if(arbitre.length === 0){
            res.status(404).json({massgae:"error internal" , data:arbitre})
         }
         res.status(200).json({massege:"socuess creating ",data:arbitre})
       }
       catch(err){
            console.log(err)
       }
         
    }
    
    createArbitre = async (req,res)=>{
        try{
            const arbitre = await Arbitres.create(
                nom,
                prenom,
                nationalite,
                confederation, 
                categorie,     
                experience,    
                status
            )

        if(arbitre.length === 0){
            res.status(404).json({massege:"server error internal"})
        }

        res.status(201).status(arbitre)
        }catch(err){
            console.log(err)
        }
    }

    updateArbitre = async (req,res)=>{
    }

    deleteArbitre = async () =>{
        
    }


}




export default new CreatArbitesController()

