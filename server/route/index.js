const Route = require('express')
const router = new Route()

const brandRouter = require('./brandRoute')
const deviceRouter = require('./deviceRoute')
const typeRouter = require('./typeRoute')
const userRouter = require('./userRoute')


router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)






module.exports = router