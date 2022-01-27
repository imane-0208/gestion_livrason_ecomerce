const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const {getAll_chauffeur,getchauffeur,create_chauffeur,acceptCommande,login} = require('../controllers/chauffeur.controller')


router.get('/getAllChauffeur', getAll_chauffeur)
router.get('/:id', getchauffeur)
router.post('/createChauffeur', create_chauffeur)
router.post('/acceptCommande', acceptCommande)

router.post('/login', login)

module.exports = router;