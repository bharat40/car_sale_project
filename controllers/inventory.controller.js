const Inventory = require('../models/inventory.model.js');

// Get inventory
exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll();
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching inventory' });
    }
};

// Update inventory
exports.updateInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByPk(req.params.id);
        if (!inventory) return res.status(404).json({ error: 'Inventory item not found' });

        await inventory.update(req.body);
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ error: 'Error updating inventory' });
    }
};
