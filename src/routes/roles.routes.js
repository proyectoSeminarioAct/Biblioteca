const { Router } = require('express')
const { getRoles,createRol } = require('../controllers/roles.controller.js')

const router = Router();


router.get('/findRoles', getRoles);
router.post('/CreateRol',createRol);


module.exports = router;

