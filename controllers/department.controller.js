const Department = require('../models/department');

exports.createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;
        const department = await Department.create({ name, description });
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        await department.update({ name, description });
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        await department.destroy();
        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
