const Department = require('../models/department.model.js');



const createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;
        const department = await Department.create({ name, description });
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createDepartment };