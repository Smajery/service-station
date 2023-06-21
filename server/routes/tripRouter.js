const Router = require('express')
const router = new Router()
const tripController = require('../controllers/tripController')
const checkRole = require("../middleware/CheckRoleMiddleware");

router.post('/', checkRole(['ADMIN']), tripController.create)
router.get('/', checkRole(['ADMIN']), tripController.getAll)
router.get('/driver', checkRole(['DRIVER']), tripController.getTripsByDriver)




module.exports = router