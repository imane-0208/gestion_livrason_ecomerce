const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const {create_livraison,getlivraison} = require('../controllers/livraison.controller')


// router.get('/getAll_livraison', livraison.getAll_livraison)
router.post('/createLivraison',create_livraison)
router.get('/:status', getlivraison)


module.exports = router;