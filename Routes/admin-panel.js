const express = require('express')
const router = express.Router()
const sericeController = require('../Controllers/admin-controller')
router.get('/adminpanel',sericeController.getAllInformation)
router.post('/add-service',sericeController.addService)

module.exports = router