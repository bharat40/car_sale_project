require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, connectDB } = require("./config/db.js");
const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  Credential: true
}))
app.use(express.json());

const port = process.env.PORT || 5000

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
  });
}).catch((err) => {
  console.error("Unable to start server: ", err);
  process.exit(1);
});