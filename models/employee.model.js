
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
const User = require('./user.model');
const Department = require('./department.model');
const Designation = require('./designation.model');

const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, unique: true, allowNull: false, references: { model: User, key: 'id' } },
    departmentId: { type: DataTypes.INTEGER, references: { model: Department, key: 'id' } },
    // designationId: { type: DataTypes.INTEGER, references: { model: Designation, key: 'id' } },
    dateOfJoining: { type: DataTypes.DATE },
    salary: { type: DataTypes.DECIMAL(10,2) }
}, {
    timestamps: true
});

module.exports = Employee;
