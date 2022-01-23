const express = require('express')
const app = express();
const mongoose = require('mongoose');
const admin = require('./models/admin');
// const manager = require('./models/manager');
// const dotenv = require('dotenv')

// dotenv.config({
//   path: './.env'
// })
const dbURI = "mongodb://127.0.0.1:27017/gestion_livraison_db";


app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.use('/api/admin', require('./routes/admin_genirale'));



mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000, () => {
    console.log('mongodb is connected')
    console.log("Up Server : http://localhost:3000")
    }) )
  .catch(err => {
    console.log("mondb not connected");
    console.log(err)
});