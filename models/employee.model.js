
const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
const User = require('./user.model');
const Department = require('./department.model');
const Designation = require('./designation.model');
=======
const { sequelize } = require('../config/db.js');
const User = require('./user.model.js');
const Department = require('./department.model.js');
const Designation = require('./designation.model.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, unique: true, allowNull: false, references: { model: User, key: 'id' } },
    departmentId: { type: DataTypes.INTEGER, references: { model: Department, key: 'id' } },
    designationId: { type: DataTypes.INTEGER, references: { model: Designation, key: 'id' } },
    dateOfJoining: { type: DataTypes.DATE },
    salary: { type: DataTypes.DECIMAL(10, 2) }
}, {
    timestamps: true
});

module.exports = Employee;
