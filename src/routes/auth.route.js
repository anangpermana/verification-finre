
const express = require('express'),
router = express.Router(),
{ login, users } = require('../controllers/auth.controller'),
{ checkConection } = require('../middleware/mongo')

router.post('/login', login)
router.get('/users', checkConection, users)
module.exports = router