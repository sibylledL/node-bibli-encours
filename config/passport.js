import passport from 'passport'
import { User } from "../src/models/users"
import LocalStrategy from 'passport-local';

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  })
});

passport.use('local-signup', new LocalStrategy({
  usernameField : "name",
  passwordField : "password",
  passReqToCallback: true
}, function(req, name, password, done){
  User.findOne({'name':name}, function(err, user){
    if(err){
      return done(err);
    }
    if(user){
      return done(null, false, {message:'name is already in use'});
    }
    var newUser = new User();
    newUser.name = name;
    newUser.password = password;
    newUser.save(function(err, result){
      if(err){
        return done(err)
      }
      return done(null, newUser);
    });
  });
}));

passport.use('local-signin', new LocalStrategy({
  usernameField:'name',
  passwordField:'password',
  passReqToCallback: true
}, function(req, name, password, done){
  User.findOne({'name':name}, function(err, user){
    if(err){
      return done(err);
    }
    if(!user){
      return done(null, false, {message:'no user found'});
    }
      return done(null, user);
    });  
}));
