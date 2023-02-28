const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoyController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts/', ContactController.store);
router.put('/contacts/:id', ContactController.update);


router.get('/categories', CategoyController.index);
router.post('/categories', CategoyController.store);


module.exports = router;
