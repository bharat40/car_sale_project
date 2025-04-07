const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
=======
const { sequelize } = require('../config/db.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('admin', 'employee', 'customer'), allowNull: false },
}, {
    timestamps: true
});

module.exports = User;
