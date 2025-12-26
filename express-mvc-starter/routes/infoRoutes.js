const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController');

router.get('/', infoController.getHome);
router.get('/about', infoController.getAbout);
router.get('/contact', infoController.getContact);
router.get('/greet', infoController.getGreeting);

module.exports = router;