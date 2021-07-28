const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')


//-------------RUTA POST: REGISTRO CLIENTES-------------
router.post("/", function (req, res) {
  let cifrado = bcrypt.hashSync(req.body.password, 10)
  req.app.locals.db.collection("clients")
    .find({ user: req.body.user })
    .toArray(function (err, data) {
      if (err) {
        res.send({ error: true, contenido: err });
      } else {
        if (data.length === 0) {
          req.app.locals.db
            .collection("clients")
            .insertOne({name: req.body.name, subname: req.body.subname, user: req.body.user, password: cifrado, email: req.body.email, admin:false}, function (err, data) {
              err
                ? res.send({ error: true, contenido: err })
                : res.send({
                    error: false,
                    contenido: {
                      respuesta: data,
                      mensaje: "Usuario registrado correctamente, gracias.",
                    },
                  });
            });
        } else {
          res.send({
            error: false,
            contenido: { mensaje: "Lo sentimos, el usuario ya está registrado." },
          });
        }
      }
    });
});
//---------------------------------------------------


module.exports = router;