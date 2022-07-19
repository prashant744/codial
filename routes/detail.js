const express = require('express');
const router =express.Router();

const detailsController = require('../controllers/details_controller');

router.get('/detail', detailsController.detail);

module.exports=router;