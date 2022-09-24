
const express = require('express'),
router = express.Router(),
{ create, verification, user, getAll } = require('../controllers/user.controller'),
{ checkConection } = require('../middleware/mongo')

router.get('/user', checkConection, user)
router.get('/users', checkConection, getAll)
router.post('/user', create)
router.post('/user/verification', verification)
module.exports = router