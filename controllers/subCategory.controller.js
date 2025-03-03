const Subcategory = require('../models/Subcategory');

// Get all subcategories
exports.getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.findAll();
        res.json(subcategories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching subcategories' });
    }
};

// Create subcategory
exports.createSubcategory = async (req, res) => {
    try {
        const subcategory = await Subcategory.create(req.body);
        res.status(201).json(subcategory);
    } catch (error) {
        res.status(500).json({ error: 'Error creating subcategory' });
    }
};
