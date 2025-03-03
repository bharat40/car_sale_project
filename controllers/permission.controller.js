const Permission = require('../models/permission');

exports.createPermission = async (req, res) => {
    try {
        const { name, description } = req.body;
        const permission = await Permission.create({ name, description });
        res.status(201).json(permission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPermissions = async (req, res) => {
    try {
        const permissions = await Permission.findAll();
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPermissionById = async (req, res) => {
    try {
        const permission = await Permission.findByPk(req.params.id);
        if (!permission) {
            return res.status(404).json({ error: 'Permission not found' });
        }
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePermission = async (req, res) => {
    try {
        const { name, description } = req.body;
        const permission = await Permission.findByPk(req.params.id);
        if (!permission) {
            return res.status(404).json({ error: 'Permission not found' });
        }
        await permission.update({ name, description });
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePermission = async (req, res) => {
    try {
        const permission = await Permission.findByPk(req.params.id);
        if (!permission) {
            return res.status(404).json({ error: 'Permission not found' });
        }
        await permission.destroy();
        res.status(200).json({ message: 'Permission deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
