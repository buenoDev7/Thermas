const express = require('express');
const router = express.Router();
const ControllerHomepage = require('../Controllers/controllerHomepage');

// View para Homepage
router.get('/', ControllerHomepage.homepage);

module.exports = router;