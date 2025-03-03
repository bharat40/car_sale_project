const Designation = require('../models/designation');
const Department = require('../models/department');

exports.createDesignation = async (req, res) => {
    try {
        const { title, departmentId } = req.body;
        const designation = await Designation.create({ title, departmentId });
        res.status(201).json(designation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllDesignations = async (req, res) => {
    try {
        const designations = await Designation.findAll({ include: Department });
        res.status(200).json(designations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDesignationById = async (req, res) => {
    try {
        const designation = await Designation.findByPk(req.params.id, { include: Department });
        if (!designation) {
            return res.status(404).json({ error: 'Designation not found' });
        }
        res.status(200).json(designation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDesignation = async (req, res) => {
    try {
        const { title, departmentId } = req.body;
        const designation = await Designation.findByPk(req.params.id);
        if (!designation) {
            return res.status(404).json({ error: 'Designation not found' });
        }
        await designation.update({ title, departmentId });
        res.status(200).json(designation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDesignation = async (req, res) => {
    try {
        const designation = await Designation.findByPk(req.params.id);
        if (!designation) {
            return res.status(404).json({ error: 'Designation not found' });
        }
        await designation.destroy();
        res.status(200).json({ message: 'Designation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};