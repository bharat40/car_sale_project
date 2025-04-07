const { DataTypes } = require('sequelize');
<<<<<<< HEAD:models/inventry.model.js
const {sequelize} = require('../config/db');
const Car = require('./car.model');
=======
const {sequelize} = require('../config/db.js');
const Car = require('./car.model.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b:models/inventory.model.js

const Inventory = sequelize.define('Inventory', {
    inventory_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    car_id: { type: DataTypes.INTEGER, references: { model: Car, key: 'car_id' }, allowNull: false },
    quantity_available: { type: DataTypes.INTEGER, defaultValue: 1, validate: { min: 0 } },
    last_updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

Car.hasOne(Inventory, { foreignKey: 'car_id', onDelete: 'CASCADE' });
Inventory.belongsTo(Car, { foreignKey: 'car_id' });

module.exports = Inventory;
