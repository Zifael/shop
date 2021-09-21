const Route = require('express')
const router = new Route()
const typeControllers = require('../controllers/typeController')
const cheackRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',cheackRoleMiddleware('ADMIN'),typeControllers.create)  
router.get('/',typeControllers.getAll)

module.exports = router