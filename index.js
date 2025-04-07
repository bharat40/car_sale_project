require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, connectDB } = require("./config/db.js");

const app = express();
<<<<<<< HEAD

const Userrouter = require("./routes/user.route.js");
const EmployeeRouter = require("./routes/employee.route.js");

=======
const Userrouter = require("./routes/user.route.js")
const Departmentrouter = require('./routes/department.route.js');
const Carrouter = require('./routes/car.routes.js')
const EmployeeRouter = require('./routes/employee.routes.js');
const InventoryRouter = require('./routes/inventory.routes.js');
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  Credential: true
}));

app.use(express.json());
<<<<<<< HEAD

app.use("/user", Userrouter);
app.use("/employee", EmployeeRouter);

const port = process.env.PORT || 5000;
=======
app.use("/user", Userrouter);
app.use('/department', Departmentrouter);
app.use('/car', Carrouter);
app.use('/employee', EmployeeRouter)
app.use('/inventory', InventoryRouter);
const port = process.env.PORT || 5000
>>>>>>> 6fe016359e9679b79c44a3a234f8cf313911303b

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
  });
}).catch((err) => {
  console.error("Unable to start server: ", err);
  process.exit(1);
});
