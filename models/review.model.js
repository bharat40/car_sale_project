const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const {sequelize} = require('../config/db');
const Car = require('./car.model');
=======
const { sequelize } = require('../config/db.js');
const Car = require('./car.model.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

const Review = sequelize.define('Review', {
    review_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    car_id: { type: DataTypes.INTEGER, references: { model: Car, key: 'car_id' }, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    review_text: { type: DataTypes.TEXT }
}, { timestamps: true });

Car.hasMany(Review, { foreignKey: 'car_id', onDelete: 'CASCADE' });
Review.belongsTo(Car, { foreignKey: 'car_id' });

module.exports = Review;
