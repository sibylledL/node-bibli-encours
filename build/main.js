require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Livre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const livreSchema = new Schema({
  titre: String,
  auteur: String,
  prix: Number,
  isbn: String,
  date: Number,
  couv: String,
  resume: String,
  info: String,
  cat: String
});

const Livre = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Livre', livreSchema);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var passportLocalMongoose = __webpack_require__(17);

const userSchema = new Schema({
  name: { type: String, index: { unique: true } },
  password: String
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', userSchema);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dotenv_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_multer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcrypt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_passport_local__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_express_session__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_passport__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_addbook_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_fiche_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_accueil_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_livres__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_users__ = __webpack_require__(5);

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();












app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));
app.set('views', __WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname + '/views'));
app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, 'public')))





const { SERVER_PORT, DBUrl } = process.env;
const url = DBUrl;

app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.urlencoded({ extended: true }));

console.log(__WEBPACK_IMPORTED_MODULE_15__models_livres__["a" /* Livre */]);

__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection.on('connected', () => {
  console.log(`[MongoDb] is running on port 27017`);
});
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(url);

__webpack_require__(20);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_10_express_session___default()({ secret: "secret" }));
app.use(__WEBPACK_IMPORTED_MODULE_9_connect_flash___default()());
app.use(__WEBPACK_IMPORTED_MODULE_11_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_11_passport___default.a.session());

app.use('/admin', __WEBPACK_IMPORTED_MODULE_12__routes_addbook_js__["a" /* livresRouter */]);
app.use('/livres', __WEBPACK_IMPORTED_MODULE_13__routes_fiche_js__["a" /* ficheRouter */]);
app.use('/accueil', __WEBPACK_IMPORTED_MODULE_14__routes_accueil_js__["a" /* accueilRouter */]);

app.get('/', (req, res) => {
  res.render('test');
});

//

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

app.listen(SERVER_PORT, () => {
  console.log(`Express running on:`, SERVER_PORT);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return livresRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_livres__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_multer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bcrypt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_connect_flash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_passport__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_passport__);









const upload = __WEBPACK_IMPORTED_MODULE_4_multer___default()({ dest: 'public/uploads/' });

const livresRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

livresRouter.get('/addbook', (req, res) => {
  res.render("admin");
});

livresRouter.post('/addbook', upload.single('couv'), (req, res) => {
  let newlivre = new __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */](req.body);
  if (req.file) {
    newlivre.couv = req.file.filename;
  } else {
    newlivre.couv = "noimage.png";
  }

  newlivre.save((err, livre) => {
    if (err) res.send(err);
    res.redirect('/admin');
  });
});
//load edit
livresRouter.get('/edit/:id', (req, res) => {
  let livreid = req.params.id;
  __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */].findById(livreid, (err, livre) => {
    if (err) throw err;

    res.render("editlivre", { livre: livre });
  });
});

//update submit
livresRouter.post('/edit/:id', (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  const id = req.params.id;
  __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */].findByIdAndUpdate(id, { $set: {
      titre: req.body.titre,
      auteur: req.body.auteur,
      prix: req.body.prix,
      isbn: req.body.isbn,
      date: req.body.date,
      couv: req.body.couv,
      resume: req.body.resume,
      info: req.body.info
    } }, { new: true }, (err, livre) => {
    if (err) {
      console.log(error);
      return res.send("ok");
    }
    res.redirect('/admin');
  });
});

livresRouter.get('/', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */].find({}, (err, livres) => {
    if (err) throw err;
    res.render("gestion", { livres });
  });
});

// page d'engeristrement de users

livresRouter.get('/users', (req, res) => {
  res.render("register");
});

livresRouter.post('/users', (req, res) => {
  let newUser = new __WEBPACK_IMPORTED_MODULE_2__models_users__["a" /* User */](req.body);
  __WEBPACK_IMPORTED_MODULE_5_bcrypt___default.a.genSalt(10, function (err, salt) {
    __WEBPACK_IMPORTED_MODULE_5_bcrypt___default.a.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save((err, user) => {
        if (err) err;
        //req.flash('success', 'you are now registered');
        //res.location('/users')

        res.redirect('/admin/login');
      });
    });
  });
});

livresRouter.get('/login', (req, res) => {
  res.render("login");
});

livresRouter.post('/login', __WEBPACK_IMPORTED_MODULE_7_passport___default.a.authenticate('local-signin', {
  successRedirect: '/admin',
  failureRedirect: '/admin/users',
  failureFlash: true
}));



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("passport-local-mongoose");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ficheRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_livres__ = __webpack_require__(1);



const ficheRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

ficheRouter.get('/:id', (req, res) => {
  let livreid = req.params.id;
  __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */].findById(livreid, (err, livre) => {
    if (err) throw err;
    res.render("fiche", { livre });
  });
});



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accueilRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_livres__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);




const accueilRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

accueilRouter.get('/', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */].find({}, (err, livres) => {
    if (err) throw err;
    res.render("index", { livres });
  });
});

accueilRouter.get('/categorie', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_livres__["a" /* Livre */].find({}, (err, livres) => {
    if (err) throw err;
    res.render("cat", { livres });
  });
});



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_models_users__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_local__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_passport_local__);




__WEBPACK_IMPORTED_MODULE_0_passport___default.a.serializeUser(function (user, done) {
  done(null, user.id);
});

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.deserializeUser(function (id, done) {
  __WEBPACK_IMPORTED_MODULE_1__src_models_users__["a" /* User */].findById(id, function (err, user) {
    done(err, user);
  });
});

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use('local-signup', new __WEBPACK_IMPORTED_MODULE_2_passport_local___default.a({
  usernameField: "name",
  passwordField: "password",
  passReqToCallback: true
}, function (req, name, password, done) {
  __WEBPACK_IMPORTED_MODULE_1__src_models_users__["a" /* User */].findOne({ 'name': name }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, false, { message: 'name is already in use' });
    }
    var newUser = new __WEBPACK_IMPORTED_MODULE_1__src_models_users__["a" /* User */]();
    newUser.name = name;
    newUser.password = password;
    newUser.save(function (err, result) {
      if (err) {
        return done(err);
      }
      return done(null, newUser);
    });
  });
}));

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use('local-signin', new __WEBPACK_IMPORTED_MODULE_2_passport_local___default.a({
  usernameField: 'name',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, name, password, done) {
  __WEBPACK_IMPORTED_MODULE_1__src_models_users__["a" /* User */].findOne({ 'name': name }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'no user found' });
    }
    return done(null, user);
  });
}));

/***/ })
/******/ ]);
//# sourceMappingURL=main.map