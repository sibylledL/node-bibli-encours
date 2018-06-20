import express from "express"
import { Livre } from "../models/livres"


const ficheRouter = express.Router();


ficheRouter.get('/:id', (req, res) => {
  let livreid = req.params.id;
  Livre.findById(livreid, (err, livre) => {
    if(err) throw err
    res.render("fiche", {livre});
  });
});



export { ficheRouter }
