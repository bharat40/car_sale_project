const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
const Department = require('./department.model');

const Designation = sequelize.define('Designation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    departmentId: { type: DataTypes.INTEGER, references: { model: Department, key: 'id' } }
}, {
    timestamps: true
});

module.exports = Designation;
