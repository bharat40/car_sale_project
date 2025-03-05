const express = require('express');
const { createDepartment } = require('../controllers/department.controller.js');

const router = express.Router();

router.post('/', createDepartment);

module.exports = router;