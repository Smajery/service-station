const Router = require('express')
const router = new Router()
const supplyRouter = require('../controllers/supplyController')
const checkRole = require("../middleware/CheckRoleMiddleware");

router.post('/', checkRole(['MANAGER']), supplyRouter.createSupplier)
router.post('/receipt', checkRole(['MANAGER']), supplyRouter.createReceipts)
router.get('/receipt', checkRole(['MANAGER']), supplyRouter.getReceipts)
router.get('/station', checkRole(['MANAGER']), supplyRouter.getAllStations)
router.get('/invoice', checkRole(['MANAGER']), supplyRouter.getAllInvoices)
router.get('/rank-suppliers', checkRole(['MANAGER']), supplyRouter.getRankSuppliers)



module.exports = router