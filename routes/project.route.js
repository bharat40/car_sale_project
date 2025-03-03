const express = require('express');
const router = express.Router();

const carController = require('../controllers/car.controller');
const customerController = require('../controllers/customer.controller');
const departmentController = require('../controllers/department.controller');
const designationController = require('../controllers/designation.controller');
const employeeController = require('../controllers/employee.controller');
const inventoryController = require('../controllers/inventry.controller');
const permissionController = require('../controllers/permission.controller');
const reviewController = require('../controllers/review.controller');
const subcategoryController = require('../controllers/subCategory.controller');
const userController = require('../controllers/user.controller');

// Car Routes
router.get('/cars', carController.getAllCars);
router.get('/cars/:id', carController.getCarById);
router.post('/cars', carController.createCar);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

// Customer Routes
router.get('/customers', customerController.getAllCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.post('/customers', customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

// Department Routes
router.get('/departments', departmentController.getAllDepartments);
router.get('/departments/:id', departmentController.getDepartmentById);
router.post('/departments', departmentController.createDepartment);
router.put('/departments/:id', departmentController.updateDepartment);
router.delete('/departments/:id', departmentController.deleteDepartment);

// Designation Routes
router.get('/designations', designationController.getAllDesignations);
router.get('/designations/:id', designationController.getDesignationById);
router.post('/designations', designationController.createDesignation);
router.put('/designations/:id', designationController.updateDesignation);
router.delete('/designations/:id', designationController.deleteDesignation);

// Employee Routes
router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/:id', employeeController.getEmployeeById);
router.post('/employees', employeeController.createEmployee);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

// Inventory Routes
router.get('/inventory', inventoryController.getInventory);
router.put('/inventory/:id', inventoryController.updateInventory);

// Permission Routes
router.get('/permissions', permissionController.getAllPermissions);
router.get('/permissions/:id', permissionController.getPermissionById);
router.post('/permissions', permissionController.createPermission);
router.put('/permissions/:id', permissionController.updatePermission);
router.delete('/permissions/:id', permissionController.deletePermission);

// Review Routes
router.get('/reviews', reviewController.getAllReviews);
router.post('/reviews', reviewController.createReview);

// Subcategory Routes
router.get('/subcategories', subcategoryController.getAllSubcategories);
router.post('/subcategories', subcategoryController.createSubcategory);

// User Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
