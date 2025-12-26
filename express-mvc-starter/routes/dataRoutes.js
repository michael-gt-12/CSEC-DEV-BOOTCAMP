const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/submit', dataController.handlePostData);

module.exports = router;