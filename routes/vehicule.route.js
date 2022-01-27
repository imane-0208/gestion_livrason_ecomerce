const express = require('express');

const router = express.Router();

const {getAllVehicule,getvehicule} = require('../controllers/vehicule.controller')


router.get('/', getAllVehicule)
router.get('/:id', getvehicule)



module.exports = router;