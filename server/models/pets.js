var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PetSchema = new Schema({
  petId: { type: String, required: true},
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
