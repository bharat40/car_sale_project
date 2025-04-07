const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
const User = require('./user.model');
const Permission = require('./permission.model');
=======
const {sequelize} = require('../config/database');
const User = require('./user');
const Permission = require('./permission');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const UserPermission = sequelize.define('UserPermission', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
    permissionId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Permission, key: 'id' } }
}, {
    timestamps: true
});

module.exports = UserPermission;