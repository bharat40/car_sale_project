const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Customer = sequelize.define('Customer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, unique: true, allowNull: false, references: { model: User, key: 'id' } },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT },
}, {
    timestamps: true
});

module.exports = Customer;
