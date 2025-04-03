const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.js');
const Category = require('./category.model.js');

const Subcategory = sequelize.define('Subcategory', {
    subcategory_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    subcategory_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    category_id: { type: DataTypes.INTEGER, references: { model: Category, key: 'category_id' } }
}, { timestamps: false });

Category.hasMany(Subcategory, { foreignKey: 'category_id', onDelete: 'CASCADE' });
Subcategory.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Subcategory;
