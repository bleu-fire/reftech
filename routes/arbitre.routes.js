import express from 'express'
import CreatArbitesController  from '../controllers/arbitre.controller.js'


const router = express.Router()

// GET /arbitres — Get all referees
router.get('/', CreatArbitesController.ArbiteGetAll)

// GET /arbitres/:id — Get a single referee by ID
// router.get('/arbitres/:id', getArbitreById)

// // POST /arbitres — Create a new referee
// router.post('/arbitres', createArbitre)

// // PUT /arbitres/:id — Update a referee
// router.put('/arbitres/:id', updateArbitre)

// // DELETE /arbitres/:id — Delete a referee
// router.delete('/arbitres/:id', deleteArbitre)

export default router
