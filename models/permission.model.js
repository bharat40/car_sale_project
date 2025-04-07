const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
=======
const {sequelize} = require('../config/db.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const Permission = sequelize.define('Permission', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.TEXT }
}, {
    timestamps: true
});

module.exports = Permission;
