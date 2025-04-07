const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
=======
const {sequelize} = require('../config/db.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const Category = sequelize.define('Category', {
    category_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    category_name: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { timestamps: false });

module.exports = Category;
