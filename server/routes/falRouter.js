const Router = require('express')
const router = new Router()
const falController = require('../controllers/falController')
const checkRole = require("../middleware/CheckRoleMiddleware");


router.post('/', checkRole(['ADMIN']), falController.create)
router.get('/', checkRole(['ADMIN', 'ATTENDANT', 'MANAGER']), falController.getAll)
router.get('/statistics', checkRole(['ADMIN']), falController.getStatistics)
router.get('/stock', checkRole(['ATTENDANT']), falController.getStocks)
router.get('/consumption/:trip_id', checkRole(['DRIVER']), falController.getConsumption)

module.exports = router