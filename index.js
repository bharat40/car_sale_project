require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, connectDB } = require("./config/db.js");

const app = express();


const Userrouter = require("./routes/user.route.js")
const Departmentrouter = require('./routes/department.route.js');
const Carrouter = require('./routes/car.routes.js')
const EmployeeRouter = require('./routes/employee.routes.js');
const InventoryRouter = require('./routes/inventory.routes.js');

app.use(cors({
  origin: "*",
  Credential: true
}));

app.use(express.json());


app.use("/user", Userrouter);
app.use("/employee", EmployeeRouter);
app.use("/car", Carrouter);

const port = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
  });
}).catch((err) => {
  console.error("Unable to start server: ", err);
  process.exit(1);
});
