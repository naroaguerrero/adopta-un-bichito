express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongodb = require("mongodb");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();
const MongoStore = require("connect-mongo");
const puerto = process.env.PORT || 3001;
//-------------ROUTER-------------
let clientes = require("./clientes");
let searcher = require("./searcher");
let animals = require("./animals");
let contact = require("./contact");

//--------------------------------

/* app.use("/gestion", gestion); */

/* --------------------------PASSPORT----------------- */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "patata", //secreto de la sesion (se puede hacer dinámico),
    resave: false, //Evita el reseteo de la sesión con cada llamada
    saveUninitialized: false, //Evita crear sesiones vacías
    store: MongoStore.create({
      //Nos guarda las sesiones en la colección "sesiones" en la base de datos "prueba"
      mongoUrl: process.env.MONGO_URL,
      dbName: "animals",
      collectionName: "session",
      ttl: 1000 * 60 * 60 * 24,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(cookieParser("patata"));
app.use(passport.initialize());
app.use(passport.session());

app.use("/clientes", clientes);
app.use("/adoption", animals);
app.use("/contact", contact);

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

/*---------------------------MONGO----------------------------*/
MongoClient.connect(process.env.MONGO_URL, function (err, client) {
  err ? console.log("🔴" + err) : (app.locals.db = client.db("animals")),
    console.log("🟢 Conectado a MongoDB");
});

//------------------- Autorización y gestión de sesiones ----------

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      app.locals.db
        .collection("clients")
        .findOne({ email: email }, function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
          }
          return done(null, user);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("-> Serialize");
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("-> Deserialize");
  app.locals.db
    .collection("clients")
    .findOne({ email: user.email }, function (err, usuario) {
      if (err) {
        return done(err);
      }
      if (!usuario) {
        return done(null, null);
      }
      return done(null, usuario); //console.log(user)
    });
});

//-------------------- LOGIN ------------------------------

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);

app.all("/api", function (req, res) {
  // Utilizar .all como verbo => Las redirecciones desde un cliente Rest las ejecuta en POST, desde navegador en GET
  res.send({ logged: true, mensaje: "Login correcto", user: req.user });
});

app.all("/api/fail", function (req, res) {
  res.send({ logged: false, mensaje: "Denegado" });
});

//app
//  .route("/api")
//  .get(res.send({ logged: true, mensaje: "Login correcto" }))
//  .post(res.send({ logged: true, mensaje: "Login correcto" }))

//-------------------- LOGOUT -----------------------------

app.post("/logout", function (req, res) {
  req.logOut();
  res.send({ mensaje: "Logout Correcto", logout: true });
});

//-------------------- RUTAS ------------------------------

app.all("/perfil", function (req, res) {
  req.isAuthenticated()
    ? res.send({
        logged: true,
        mensaje: "Todo correcto: información sensible",
        user: req.user,
      })
    : res.send({ logged: false, mensaje: "Necesitas logearte. Denegado" });
});

/*----------------CONNECTION-----------------*/
app.listen(puerto, function (err) {
  err
    ? console.log("🔴 Servidor fallido")
    : console.log("🟢 Servidor a la escucha en el puerto:" + puerto);
});
