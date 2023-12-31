const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')
const checkRole = require("../middleware/CheckRoleMiddleware");


router.post('/refueling', checkRole(['ATTENDANT']), carController.refueling)
router.get('/top-consumers', checkRole(['ATTENDANT']), carController.topConsumers)
router.get('/', checkRole(['ADMIN']), carController.getAll)


module.exports = router