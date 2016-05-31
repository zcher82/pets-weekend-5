var express = require('express');
var router = express.Router();
var Pet = require('../models/pets');


//GET -- all the favorite pets to add to the DOM
router.get('/', function (req, res) {
  Pet.find({}, function (err, favPets) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (favPets);
  });
});


//DELETE -- favorite pets from the DOM
router.delete('/:id', function (req, res) {
  console.log(req.params.id);
  Pet.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.sendStatus(204);
  });
});

module.exports = router;
