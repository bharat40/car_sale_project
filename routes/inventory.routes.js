const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller.js');

router.get('/', inventoryController.getInventory);
router.put('/:id', inventoryController.updateInventory);

module.exports = router;
