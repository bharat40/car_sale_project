require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected...");


        await sequelize.sync({ alter: true });
        console.log("User table checked/updated");
    } catch (err) {
        console.error("Error connecting to database:", err);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
