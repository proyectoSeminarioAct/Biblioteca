const {Router} = require('express')
const {getAuthors, createAuthors} = require('../controllers/authors_controller.js')

const router = Router();

router.get('/authors', getAuthors);
router.post('/authors', createAuthors);
router.put('/authors/:id');
router.delete('/authors/:id');
router.get('/authors/:id');

module.exports = router;