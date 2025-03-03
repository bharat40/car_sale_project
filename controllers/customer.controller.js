const Customer = require('../models/customer');
const User = require('../models/user');

exports.createCustomer = async (req, res) => {
    try {
        const { userId, firstName, lastName, phone, address } = req.body;
        const customer = await Customer.create({ userId, firstName, lastName, phone, address });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({ include: User });
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, { include: User });
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const { firstName, lastName, phone, address } = req.body;
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        await customer.update({ firstName, lastName, phone, address });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        await customer.destroy();
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};