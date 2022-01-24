const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const {getAdmin,login} = require('../controllers/admin.controller')

// routes admin_genirale
router.get('/', getAdmin)
router.post('/login', login)

module.exports = router;