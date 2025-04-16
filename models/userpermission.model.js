const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user.model');
const Permission = require('./permission.model');

const UserPermission = sequelize.define('UserPermission', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    userId: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { 
            model: User, 
            key: 'id' 
        } 
    },
    permissionId: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { 
            model: Permission, 
            key: 'id' 
        } 
    }
}, {
    timestamps: true
});

module.exports = UserPermission;