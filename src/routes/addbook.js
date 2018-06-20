import express from "express";
import { Livre } from "../models/livres";
import { User } from "../models/users";
import bodyParser from "body-parser"
import multer from "multer";
import bcrypt from 'bcrypt';
import flash from 'connect-flash';
import passport from 'passport';

const upload = multer({dest:'public/uploads/'});

const livresRouter = express.Router();



livresRouter.get('/addbook',(req,res) => {
  res.render("admin")
})

livresRouter.post('/addbook', upload.single('couv'),(req,res) => {
  let newlivre = new Livre(req.body)
  if(req.file){
     newlivre.couv = req.file.filename
  }else{
    newlivre.couv = "noimage.png"
  }

  newlivre.save((err,livre) => {
    if(err) res.send(err)
    res.redirect('/admin')

  });

});
//load edit
livresRouter.get('/edit/:id', (req, res) => {
  let livreid = req.params.id;
  Livre.findById(livreid, (err, livre) => {
    if(err) throw err

    res.render("editlivre", {livre: livre});
  });
});

//update submit
livresRouter.post('/edit/:id', (req, res) => {
  if(!req.body){
    return res.sendStatus(500);
  }
  const id = req.params.id;
  Livre.findByIdAndUpdate(id, {$set:{
    titre :req.body.titre,
    auteur : req.body.auteur,
    prix : req.body.prix,
    isbn : req.body.isbn,
    date : req.body.date,
    couv : req.body.couv,
    resume : req.body.resume,
    info : req.body.info
  }}, {new: true}, (err, livre) => {
    if (err) {
      console.log(error)
      return res.send("ok")
    }
    res.redirect('/admin')
  })
});

livresRouter.get('/',(req, res) => {
  Livre.find({},(err, livres) => {
    if(err) throw err
    res.render("gestion", {livres})
  });

});



// page d'engeristrement de users

livresRouter.get('/users', (req, res) => {res.render("register")
})



livresRouter.post('/users',(req,res) => {
  let newUser = new User(req.body)
  bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        newUser.password = hash
        newUser.save((err, user) => {
          if(err) (err)
          //req.flash('success', 'you are now registered');
          //res.location('/users')

          res.redirect('/admin/login');
        })
      })
  });
});

livresRouter.get('/login', (req, res) => {
res.render("login")
})

livresRouter.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/admin',
  failureRedirect:'/admin/users',
  failureFlash: true
}))



export { livresRouter }
