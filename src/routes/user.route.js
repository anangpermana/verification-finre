
const express = require('express'),
router = express.Router(),
{ create, verification, user } = require('../controllers/user.controller'),
{ checkConection } = require('../middleware/mongo')

router.get('/user', checkConection, user)
router.post('/user', create)
router.post('/user/verification', verification)
module.exports = router