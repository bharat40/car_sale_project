const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.js');

const Category = sequelize.define('Category', {
    category_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    category_name: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { timestamps: false });

module.exports = Category;
