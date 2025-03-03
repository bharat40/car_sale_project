const Employee = require('../models/employee');
const User = require('../models/user');
const Department = require('../models/department');
const Designation = require('../models/designation');

exports.createEmployee = async (req, res) => {
    try {
        const { userId, departmentId, designationId, dateOfJoining, salary } = req.body;
        const employee = await Employee.create({ userId, departmentId, designationId, dateOfJoining, salary });
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({ include: [User, Department, Designation] });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id, { include: [User, Department, Designation] });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const { departmentId, designationId, dateOfJoining, salary } = req.body;
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        await employee.update({ departmentId, designationId, dateOfJoining, salary });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        await employee.destroy();
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
