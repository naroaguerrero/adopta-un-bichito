const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  req.app.locals.db
    .collection("animals")
    .find()
    .toArray(function (err, datos) {
      if (err) {
        res.send({ error: true, contenido: err });
      } else {
        res.send({ error: false, contenido: datos });
      }
    });
});

//-------------RUTA POST: CREAR ANUNCIO ANIMALES-------------

router.post("/", function (req, res) {
  req.app.locals.db
    .collection("animals")
    .find({ nombre: req.body.nombre })
    .toArray(function (err, datos) {
      if (err) {
        res.send({ error: true, content: error });
      } else {
        if (datos.length === 0) {
          req.app.locals.db.collection("animals").insertOne(
            {
              nombre: req.body.nombre,
              raza: req.body.raza,
              tipo: req.body.tipo,
              sexo: req.body.sexo,
              nacimiento: req.body.nacimiento,
              imagen: req.body.imagen,
            },
            function (err, data) {
              if (data.insertedCount === 1) {
                res.send({
                  err: false,
                  content: {
                    answer: data,
                    message: "Bichito con ganas de ser adoptado.",
                  },
                });
              } else {
                res.send({ err: true, content: err });
              }
            }
          );
        } else {
          res.send({
            error: false,
            content: { message: "Este bichito ya está publicado." },
          });
        }
      }
    });
});

//-------------RUTA DELETE: BORRAR ANUNCIO ANIMALES-------------
router.delete("/", function (req, res) {
  req.app.locals.db
    .collection("animals")
    .deleteOne({ nacimiento: req.body.nacimiento }, function (err, datas) {
      if (datas.deletedCount === 0) {
        res.send({
          error: true,
          content: {
            answer: err,
            message:
              "Anuncio no encontrado",
          },
        });
      } else {
        res.send({
          error: false,
          content: {
            answer: datas,
            message: "Anuncio borrado correctamente",
          },
        });
      }
    });
});
//---------------------------------------------------
module.exports = router;
