const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Permission = require('./permission');

const UserPermission = sequelize.define('UserPermission', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
    permissionId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Permission, key: 'id' } }
}, {
    timestamps: true
});

module.exports = UserPermission;
