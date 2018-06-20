import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import volleyball from 'volleyball';
import 'dotenv/config';
import path from 'path';
import multer from 'multer';
import bcrypt from 'bcrypt';
import LocalStrategy from 'passport-local';
import flash from 'connect-flash';
import session from 'express-session';
import passport from "passport";


app.use(express.static('public'))
app.set('views', path.join(__dirname + '/views'))
app.set('view engine','pug')
//app.use(express.static(path.join(__dirname, 'public')))

import { livresRouter } from './routes/addbook.js'
import { ficheRouter } from './routes/fiche.js'
import { accueilRouter } from './routes/accueil.js'


const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URI || "mongodb://sdL:nodebibli1@ds261470.mlab.com:61470/bibli_db";

app.use(bodyParser.urlencoded({ extended : true }))
import { Livre } from "./models/livres";
console.log(Livre)


mongoose.connection.on('connected',() => {
  console.log(`[MongoDb] is running on port 27017`);
})
mongoose.connect(url);


require('../config/passport');
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(volleyball);
app.use(session({secret:"secret"}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



app.use('/admin', livresRouter)
app.use('/livres', ficheRouter)
app.use('/accueil', accueilRouter)

app.get('/', (req, res) => {
  res.render('test')
})

//
import { User } from './models/users';
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());
//




/*app.set("listcat", function(livre){
  let cat = [];
  let cat2 = [];
  cat.push(livre.cat);
  cat.sort();
  for(var i = 0; i<cat.length; i++){
    if(cat[i]!==cat[i+1]){
      cat2.push(cat[i])
    }
  }
  return cat2
})*/


app.listen(port,"0.0.0.0",() => {
  console.log("magic happens")
});
