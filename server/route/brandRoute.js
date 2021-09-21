const Route = require('express')
const router = new Route()
const branController = require('../controllers/brandController')
const cheackRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',cheackRoleMiddleware("ADMIN"),branController.create)  // create 
router.get('/',branController.getAll)

module.exports = router