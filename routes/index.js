const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to yes/no api'))

router.post('/response', controllers.createResponse);
router.get('/response', controllers.getResponse);

module.exports = router;