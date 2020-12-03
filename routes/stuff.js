const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

router.post('/', auth, multer, stuffCtrl.createThing);  
router.put('/:id', auth, multer,stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.findOneThing);
router.get('/', auth, stuffCtrl.findAllThing);


module.exports = router;