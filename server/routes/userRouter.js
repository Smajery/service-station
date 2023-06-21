const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')
const checkRole = require("../middleware/CheckRoleMiddleware");


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.post('/', checkRole(['ADMIN']), userController.updateRole)
router.get('/', checkRole(['ADMIN']), userController.getAll)



module.exports = router