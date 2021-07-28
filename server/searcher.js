const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  req.app.locals.db
    .collection("animals")
    .find({
      $and: [
        { age: { $gte: req.body.ageMini } },
        { age: { $lte: req.body.ageMaxi } },
      ],
    })
    .toArray(function (err, datos) {
      err
        ? res.send({ error: true, contenido: err })
        : res.send({ error: false, contenido: datos });
    });
});

module.exports = router;
