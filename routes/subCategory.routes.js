const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

router.get('/', subcategoryController.getAllSubcategories);
router.post('/', subcategoryController.createSubcategory);

module.exports = router;
