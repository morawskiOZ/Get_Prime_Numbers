const express = require('express');
const router = express.Router();


const storeController = require('../controllers/storeController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', storeController.homePage);

// API

router.get("/api/prime",catchErrors(storeController.searchNumbers) );

module.exports = router;


