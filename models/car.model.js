const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
const Category = require('./category.model');
const Subcategory = require('./subCategory.model');
=======
const {sequelize} = require('../config/db.js');
const Category = require('./category.model.js');
const Subcategory = require('./subCategory.model.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const Car = sequelize.define('Car', {
    car_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    make: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    mileage: { type: DataTypes.INTEGER, allowNull: false },
    fuel_type: { type: DataTypes.ENUM('Petrol', 'Diesel', 'Electric', 'Hybrid'), allowNull: false },
    transmission: { type: DataTypes.ENUM('Manual', 'Automatic'), allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    engine_capacity: { type: DataTypes.STRING, allowNull: false },
    seating_capacity: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.TEXT },
    category_id: { type: DataTypes.INTEGER, references: { model: Category, key: 'category_id' } },
    subcategory_id: { type: DataTypes.INTEGER, references: { model: Subcategory, key: 'subcategory_id' } }
}, { timestamps: true });

Category.hasMany(Car, { foreignKey: 'category_id', onDelete: 'SET NULL' });
Subcategory.hasMany(Car, { foreignKey: 'subcategory_id', onDelete: 'SET NULL' });
Car.belongsTo(Category, { foreignKey: 'category_id' });
Car.belongsTo(Subcategory, { foreignKey: 'subcategory_id' });

module.exports = Car;
