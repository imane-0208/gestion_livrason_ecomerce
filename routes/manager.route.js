const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const {getmanager,getAllManagers,createManager,login} = require('../controllers/manager.controller')

// routes admin_genirale
router.get('/', getAllManagers)
router.get('/:id', getmanager)
router.post('/create', createManager)
router.post('/login', login)

module.exports = router;