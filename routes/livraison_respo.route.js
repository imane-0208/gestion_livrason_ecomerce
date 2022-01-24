
const express = require('express');

const router = express.Router();

const {getRespo,login,getAllResponsables,createResponsable} = require('../controllers/livraison_respo.controller')
// routes admin_genirale
router.get('/', getAllResponsables)
router.get('/:id', getRespo)
router.post('/create', createResponsable)
router.post('/login', login)

module.exports = router;