const express = require("express");

const router = express.Router();
const { signup, login, getAllUsers } = require("../controllers/user.controller.js")
router.post('/signup', signup);
router.post("/login", login);
router.get('/getUsers', getAllUsers);

module.exports = router;