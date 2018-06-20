import express from "express";
import { Livre } from "../models/livres";
import bodyParser from "body-parser"

const  accueilRouter = express.Router();

accueilRouter.get('/',(req,res) => {
  Livre.find({}, (err, livres) => {
  if (err) throw err
  res.render("index", {livres})
  });
});

accueilRouter.get('/categorie', (req, res) => {
  Livre.find({}, (err, livres) => {
  if (err) throw err
  res.render("cat", {livres})
});
});

export { accueilRouter }
