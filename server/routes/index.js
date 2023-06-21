const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const carRouter = require('./carRouter')
const falRouter = require('./falRouter')
const supplyRouter = require('./supplyRouter')
const tripRouter = require('./tripRouter')


router.use('/user', userRouter)
router.use('/car', carRouter)
router.use('/fal', falRouter)
router.use('/supply', supplyRouter)
router.use('/trip', tripRouter)


module.exports = router