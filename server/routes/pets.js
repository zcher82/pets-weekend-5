var express = require('express');
var router = express.Router();
var Pet = require('../models/pets');



//POST -- posts a new favorite pet to the DB as new object
router.post('/', function (req, res) {
  var pet = new Pet(req.body);
  pet.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});


//GET -- gets the count of favorite pets
router.get('/', function (req, res) {
  Pet.count({}, function (err, count) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send({favoritesCount : count});
  });
});


module.exports = router;
