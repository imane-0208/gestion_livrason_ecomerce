const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }  
  
}, { timestamps: true });

const respo = mongoose.model('livraison_respo', respoSchema);
module.exports = respo;