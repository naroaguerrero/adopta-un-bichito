const express = require("express");
const router = express.Router();

router.put("/", function (req, res) {
  req.app.locals.db.collection("contact").insertOne({
    name: req.body.name,
    email: req.body.email,
    question: req.body.question,
  },
    function (err, datas) {
      err
        ? res.send({ error: true, content: err })
        : res.send({ error: false, content: datas, mensaje: "Pregunta enviada correctamente", });
    });
});
module.exports = router;
