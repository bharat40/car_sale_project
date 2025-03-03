const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Car = require('./Car');

const Inventory = sequelize.define('Inventory', {
    inventory_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    car_id: { type: DataTypes.INTEGER, references: { model: Car, key: 'car_id' }, allowNull: false },
    quantity_available: { type: DataTypes.INTEGER, defaultValue: 1, validate: { min: 0 } },
    last_updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

Car.hasOne(Inventory, { foreignKey: 'car_id', onDelete: 'CASCADE' });
Inventory.belongsTo(Car, { foreignKey: 'car_id' });

module.exports = Inventory;
