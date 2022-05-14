const {Router} = require('express')
const {getUsers, createUsers} = require('../controllers/users.controller.js')

const router = Router();

router.get('/findUsers', getUsers);
router.post('/createUsers', createUsers);
router.put('/users/:id');
router.delete('/users/:id');
router.get('/users/:id');

module.exports = router;