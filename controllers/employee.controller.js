const Employee = require('../models/employee.model');
const User = require('../models/user.model');
const Department = require('../models/department.model');
const Designation = require('../models/designation.model');

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const { userId, departmentId, dateOfJoining, salary } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const newEmployee = await Employee.create({
            userId,
            departmentId,
            dateOfJoining,
            salary
        });

        res.status(201).json(newEmployee);
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [{ model: User }, { model: Department }, { model: Designation }]
        });
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id, {
            include: [{ model: User }, { model: Department }, { model: Designation }]
        });

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update employee details
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { departmentId, dateOfJoining, salary } = req.body;

        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        await employee.update({ departmentId, dateOfJoining, salary });

        res.status(200).json({ message: "Employee updated successfully", employee });
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        await employee.destroy();
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
